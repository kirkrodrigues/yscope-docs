We adhere to Google's C++ style guide with the following exceptions:

# Header files

## Self-contained Headers

* Header files should end in `.hpp`
* Don't use non-header files meant for inclusion since they can confuse static analysis tools.

## The #define Guard

* The format of the symbol name should be `<NAMESPACE>_<FILENAME-STEM>_<FILENAME-EXTENSION>`

## Names and order of includes

* For codebases where the code is not organized into well-defined libraries, it is fine to use UNIX
  directory aliases to include headers.
* For C headers that have C++ counterparts (e.g., `stddef.h` vs `cstddef`), prefer the C++
  counterpart.

# Scoping

## Namespaces

Single-line nested namespace declarations (e.g. `bar` in `foo`) should use the following format
(unless doing so would affect clarity):

```cpp
namespace foo::bar {
}
```

## Internal linkage

Only use unnamed namespaces (instead of the `static` qualifier) to give functions and variables
internal linkage.

# Classes

## Doing work in constructors

* We allow (but discourage) the use of exceptions, even in constructors.

## Declaration order

* Group static constants/methods/members together before non-static constants/methods/constants.

# Trailing Return Type Syntax

* Use trailing return types for all new code. Old code will be updated gradually.

# Use of const

* Place const following east-const

# Formatting

## Looping and branching statements

* Empty loop bodies should be indicated with `{}` (not a `continue;` statement).

## Boolean Expressions

* When breaking an expression into another line, place the operator at the beginning of the line.

## Variable and Array Initialization

* Prefer brace-initialization (`{}`) except when saving the return value of a method.
  * The rationale is to create clear code
```cpp
int x{long_method_name(param1, param2)};
```

```cpp
auto x = long_method_name(param1, param2);
```

## Whitespace

For the most part, our whitespace rules are handled by clang-format's automated formatting, so we
omit specifics here. When in doubt, trust clang-format or bring it up in the review. 
