## Contributing

KEYDIR is a community-driven project, and contributions help keep the directory accurate, up to date, and useful for everyone.

### 1. Fork the repository

```text
https://github.com/keydir-in/keydir.in/fork
```

### 2. Add or update vendor data

Edit the vendor list in:

```text
/assets/js/shared.js
```

**Standard vendor entry**

```js
{
  name: "VendorName",
  url: "https://vendor.in/",
  cats: ["Switches", "Keycaps"]
}
```

**Vendor entry with a community warning**

```js
{
  name: "VendorName",
  url: "https://vendor.in/",
  cats: ["Pre-built"],
  warning: true,
  warning_message: "Community-reported concerns about after-sales support."
}
```

### 3. Contribution guidelines

Before submitting your changes, make sure that:

* ✅ The vendor operates in India.
* ✅ The website is live and accessible.
* ✅ Categories match the values defined in `CAT_META` in `shared.js`.
* ✅ All descriptions are neutral, factual, and unbiased.
* ❌ Do not add affiliate or referral links.
* ❌ Do not submit sponsored or promotional listings.

### 4. Open a Pull Request

Use a clear, descriptive title. For example:

```text
feat: add XYZ Vendor (Switches, Keycaps)
fix: update ABC Vendor URL
warn: flag DEF Vendor for community-reported support concerns
```
