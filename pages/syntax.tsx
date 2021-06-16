import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Syntax: NextPage = () => {
    return <div>
        <Head>
            <title>Syntax | CSVX</title>
        </Head>
        <h1>Syntax Reference</h1>
        <p>
            Since this is an extension of CSV, the basic format is the same as CSV.
            The following describes the syntax of the expression for each item.
        </p>
        <h2>Supported Types of Values</h2>
        <table className='pure-table pure-table-horizontal'>
            <thead>
                <td>Type Name</td>
                <td>Syntax</td>
            </thead>
            <tbody>
                <tr>
                    <td>Integer</td>
                    <td>Decimal, hexadecimal, octal, and binary numbers are supported.</td>
                </tr>
                <tr>
                    <td>Float</td>
                    <td>Only decimal floating point numbers are supported.</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>Be sure to enclose the string in double quotes.</td>
                </tr>
                <tr>
                    <td>Boolean</td>
                    <td>Specify true or false.</td>
                </tr>
                <tr>
                    <td>Ref</td>
                    <td>Specify the rows in uppercase letters and the columns in numbers. For example, the upper left is A1, and the one to the right is B1.</td>
                </tr>
                <tr>
                    <td>Range</td>
                    <td>The range is represented by two Ref type values. For example, A1:B2.</td>
                </tr>
            </tbody>
        </table>
        <h2>Supported Operators</h2>
        <table className='pure-table pure-table-horizontal'>
            <thead>
                <td>Operator</td>
                <td>Meaning</td>
            </thead>
            <tbody>
                <tr>
                    <td>+</td>
                    <td>Addition</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>Subtraction, minus</td>
                </tr>
                <tr>
                    <td>*</td>
                    <td>Multiplication</td>
                </tr>
                <tr>
                    <td>/</td>
                    <td>Division</td>
                </tr>
                <tr>
                    <td>!</td>
                    <td>Logical NOT, bitwise inversion</td>
                </tr>
                <tr>
                    <td>&amp;&amp;</td>
                    <td>Logical AND</td>
                </tr>
                <tr>
                    <td>||</td>
                    <td>Logical OR</td>
                </tr>
                <tr>
                    <td>&amp;&amp;</td>
                    <td>Logical AND</td>
                </tr>
                <tr>
                    <td>||</td>
                    <td>Logical OR</td>
                </tr>
                <tr>
                    <td>&amp;</td>
                    <td>Bitwise AND</td>
                </tr>
                <tr>
                    <td>|</td>
                    <td>Bitwise OR</td>
                </tr>
                <tr>
                    <td>^</td>
                    <td>Logical, bitwise XOR</td>
                </tr>
                <tr>
                    <td>&gt;&gt;</td>
                    <td>Right shift</td>
                </tr>
                <tr>
                    <td>&lt;&lt;</td>
                    <td>Left shift</td>
                </tr>
                <tr>
                    <td>==</td>
                    <td>Equal</td>
                </tr>
                <tr>
                    <td>!=</td>
                    <td>Unequal</td>
                </tr>
                <tr>
                    <td>&lt;</td>
                    <td>Less than</td>
                </tr>
                <tr>
                    <td>&lt;=</td>
                    <td>Less than or Equal</td>
                </tr>
                <tr>
                    <td>&gt;</td>
                    <td>Greater than</td>
                </tr>
                <tr>
                    <td>&gt;=</td>
                    <td>Greater than or Equal</td>
                </tr>
            </tbody>
        </table>
        <h2>Supported Functions</h2>
        <table className='pure-table pure-table-horizontal'>
            <thead>
                <tr>
                    <th>Function</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ref(x, y)</td>
                    <td>Deprecated. Returns the value at (x, y).</td>
                </tr>
                <tr>
                    <td>sum(range)</td>
                    <td>Returns the sum of the values in the range.</td>
                </tr>
                <tr>
                    <td>avg(range)</td>
                    <td>Returns the average of the values in the range.</td>
                </tr>
                <tr>
                    <td>if(condition, on_true, on_false)</td>
                    <td>If condition is true, this returns on_true. Otherwise, it returns on_false.</td>
                </tr>
                <tr>
                    <td>round(x)</td>
                    <td>Returns the nearest integer to a number. Round half-way cases away from 0.0.</td>
                </tr>
                <tr>
                    <td>floor(x)</td>
                    <td>Returns the largest integer less than or equal to a number.</td>
                </tr>
                <tr>
                    <td>ceil(x)</td>
                    <td>Returns the smallest integer greater than or equal to a number.</td>
                </tr>
                <tr>
                    <td>log(base, x)</td>
                    <td>Returns the logarithm of the number with respect to an arbitrary base.</td>
                </tr>
                <tr>
                    <td>ln(x)</td>
                    <td>Returns the natural logarithm of the number.</td>
                </tr>
                <tr>
                    <td>log2(x)</td>
                    <td>Returns the base 2 logarithm of the number.</td>
                </tr>
                <tr>
                    <td>log10(x)</td>
                    <td>Returns the base 10 logarithm of the number.</td>
                </tr>
                <tr>
                    <td>sqrt(x)</td>
                    <td>Returns the square root of a number.</td>
                </tr>
                <tr>
                    <td>pow(base, exp)</td>
                    <td>Raises the base to the exp power.</td>
                </tr>
                <tr>
                    <td>sin(x)</td>
                    <td>Computes the sine of a number (in radians).</td>
                </tr>
                <tr>
                    <td>cos(x)</td>
                    <td>Computes the cosine of a number (in radians).</td>
                </tr>
                <tr>
                    <td>tan(x)</td>
                    <td>Computes the tangent of a number (in radians).</td>
                </tr>
                <tr>
                    <td>asin(x)</td>
                    <td>Computes the arcsine of a number (in radians).</td>
                </tr>
                <tr>
                    <td>acos(x)</td>
                    <td>Computes the arccosine of a number (in radians).</td>
                </tr>
                <tr>
                    <td>atan(x)</td>
                    <td>Computes the arctangent of a number (in radians).</td>
                </tr>
                <tr>
                    <td>sinh(x)</td>
                    <td>Hyperbolic sine function.</td>
                </tr>
                <tr>
                    <td>cosh(x)</td>
                    <td>Hyperbolic cosine function.</td>
                </tr>
                <tr>
                    <td>tanh(x)</td>
                    <td>Hyperbolic tangent function.</td>
                </tr>
                <tr>
                    <td>asinh(x)</td>
                    <td>Inverse hyperbolic sine function.</td>
                </tr>
                <tr>
                    <td>acosh(x)</td>
                    <td>Inverse hyperbolic cosine function.</td>
                </tr>
                <tr>
                    <td>atanh(x)</td>
                    <td>Inverse hyperbolic tangent function.</td>
                </tr>
            </tbody>
        </table>
        <h2>Supported Constants</h2>
        <table className='pure-table pure-table-horizontal'>
            <thead>
                <tr>
                    <th>Constant</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>inf</td>
                    <td>Infinity (∞)</td>
                </tr>
                <tr>
                    <td>NaN</td>
                    <td>Not a Number (NaN)</td>
                </tr>
                <tr>
                    <td>e</td>
                    <td>Euler&apos;s number (e)</td>
                </tr>
                <tr>
                    <td>pi</td>
                    <td>Archimedes&apos; constant (π)</td>
                </tr>
                <tr>
                    <td>tau</td>
                    <td>The full circle constant (τ)</td>
                </tr>
            </tbody>
        </table>
    </div>
};

export default Syntax;
