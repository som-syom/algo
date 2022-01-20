#include <bits/stdc++.h>
using namespace std;

constexpr int SZ = 1 << 20;class INPUT { private: char read_buf[SZ];int read_idx, next_idx;bool __END_FLAG__, __GETLINE_FLAG__;public:explicit operator bool() { return !__END_FLAG__; }bool IsBlank(char c) { return c == ' ' || c == '\n'; }bool IsEnd(char c) { return c == '\0'; }char _ReadChar() {if (read_idx == next_idx) {next_idx = fread(read_buf, sizeof(char), SZ, stdin);if (next_idx == 0) return 0;read_idx = 0;}return read_buf[read_idx++];}char ReadChar() {char ret = _ReadChar();for (; IsBlank(ret); ret = _ReadChar());return ret;}template<typename T> T ReadInt() {T ret = 0; char cur = _ReadChar(); bool flag = 0;for (; IsBlank(cur); cur = _ReadChar());if (cur == '-') flag = 1, cur = _ReadChar();for (; !IsBlank(cur) && !IsEnd(cur); cur = _ReadChar()) ret = 10 * ret + (cur & 15);if (IsEnd(cur)) __END_FLAG__ = 1;return flag ? -ret : ret;}string ReadString() {string ret; char cur = _ReadChar();for (; IsBlank(cur); cur = _ReadChar());for (; !IsBlank(cur) && !IsEnd(cur); cur = _ReadChar()) ret.push_back(cur);if (IsEnd(cur)) __END_FLAG__ = 1;return ret;}double ReadDouble() {string ret = ReadString();return stod(ret);}string getline() {string ret; char cur = _ReadChar();for (; cur != '\n' && !IsEnd(cur); cur = _ReadChar()) ret.push_back(cur);if (__GETLINE_FLAG__) __END_FLAG__ = 1;if (IsEnd(cur)) __GETLINE_FLAG__ = 1;return ret;}friend INPUT& getline(INPUT& in, string& s) { s = in.getline(); return in; }void tie(int i) {}void precision(int i) {}} _in;class OUTPUT {private:char write_buf[SZ];int write_idx;public:~OUTPUT() { Flush(); }explicit operator bool() { return 1; }void Flush() {fwrite(write_buf, sizeof(char), write_idx, stdout);write_idx = 0;}void WriteChar(char c) {if (write_idx == SZ) Flush();write_buf[write_idx++] = c;}template<typename T> int GetSize(T n) {int ret = 1;for (n = n >= 0 ? n : -n; n >= 10; n /= 10) ret++;return ret;}template<typename T> void WriteInt(T n) {int sz = GetSize(n);if (write_idx + sz >= SZ) Flush();if (n < 0) write_buf[write_idx++] = '-', n = -n;for (int i = sz; i-- > 0; n /= 10) write_buf[write_idx + i] = n % 10 | 48;write_idx += sz;}void WriteString(string s) { for (auto& c : s) WriteChar(c); }void WriteDouble(double d) { WriteString(to_string(d)); }void tie(int i) {}void precision(int i) {}} _out;INPUT& operator>> (INPUT& in, char& i) { i = in.ReadChar(); return in; } INPUT& operator>> (INPUT& in, string& i) { i = in.ReadString(); return in; } template<typename T, typename std::enable_if_t<is_arithmetic_v<T>>* = nullptr> INPUT& operator>> (INPUT& in, T& i) {if constexpr (is_floating_point_v<T>) i = in.ReadDouble();else if constexpr (is_integral_v<T>) i = in.ReadInt<T>(); return in; } OUTPUT& operator<< (OUTPUT& out, char i) { out.WriteChar(i); return out; } OUTPUT& operator<< (OUTPUT& out, string i) { out.WriteString(i); return out; } template<typename T, typename std::enable_if_t<is_arithmetic_v<T>>* = nullptr> OUTPUT& operator<< (OUTPUT& out, T i) {if constexpr (is_floating_point_v<T>) out.WriteDouble(i);else if constexpr (is_integral_v<T>) out.WriteInt<T>(i); return out; }
#define fastio 1
#ifdef fastio
#define cin _in 
#define cout _out 
#define istream INPUT 
#define ostream OUTPUT
#endif
typedef long long ll;
typedef pair<int, int> ii;
typedef tuple<int, int, int> iii;
typedef pair<long long, long long> pll;
typedef vector<int> vi;
typedef vector<pair<int, int>> vii;
typedef vector<long long> vl;
typedef vector<pair<long long, long long>> vll;
typedef bool boolean;

#define ITER(n) for(ll zz=0;zz<n;zz++) 
#define FOR(i,n) for(ll i=0;i<n;i++)
#define FFOR(i,j,m,n) for(ll i=0;i<m;i++) for(ll j=0;j<n;j++)
#define RANGE(i,s,e) for(ll i=s;i<=e;i++)
#define RRANGE(i,j,s1,e1,s2,e2) for(ll i=s1;i<=e1;i++) for(ll j=s2;j<=e2;j++)
#define REVERSE(i,s,e) for(ll i=e;i>=s;i--)
#define mp(a, b) make_pair(a,b)
#define pf push_front
#define ppf pop_front
#define pb push_back
#define ppb pop_back
#define mt make_tuple
#define _ ios_base::sync_with_stdio(false), cin.tie(0), cout.tie(0), cout.precision(15);


const ll INF = 1ll << 30;
//int dirs[4][2] = {{-1,0}, {0, 1}, {1,0}, {0,-1}};
int dirs[3][2] = {{0, 1}, {1,0}, {0,-1}};
int knights[8][2] = {{-1,2}, {-1,-2}, {1,2}, {1,-2}, {-2,1}, {-2,-1}, {2,1}, {2,-1}};
int inline ri(istream &cin) {int n; cin >> n; return n;}
ll inline rl(istream &cin) {ll n; cin >> n; return n;}
char inline rc(istream &cin) {char ch; cin >> ch; return ch;}
string inline rs(istream &cin) {string n; cin >> n; return n;}
void split(string &line, vector<string> &v, const char delimeter = ',') { stringstream str(line); string buffer; while(getline( str, buffer, delimeter)) { v.pb(buffer); } }
// getline(cin, str);

int main() { _
    #ifdef JAY_LOCAL
        ifstream cin("input.txt");
        //ofstream cout("output.txt");
    #endif
    int n,k; cin >> n >> k;
    vi v(n); FOR(i,n) cin >> v[i];
    int l = 0, r = 0, max_freq = 1;
    vi freq(100001, 0); freq[v[0]] = 1;
    int ans = 0;
    while(l <= r) {
        if(max_freq > k || r + 1 >= n) {
            int val = v[l++];
            if(max_freq == freq[val]) max_freq--;
            freq[val]--;
            if(max_freq <= k) ans = max(ans, r - l + 1);
        } else {
            int val = v[++r];
            freq[val]++;
            max_freq = max(max_freq, freq[val]);
            if(max_freq <= k) ans = max(ans, r - l + 1);
        }
    }
    cout << ans << '\n';
    return 0;
}