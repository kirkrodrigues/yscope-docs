We adhere to Google's C++ style guide with the following exceptions:

# Self-contained Headers

* Header files should end in `.hpp`

# The #define Guard

* The format of the symbol name should be `<NAMESPACE>_<FILENAME>_<EXTENSION>`

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
