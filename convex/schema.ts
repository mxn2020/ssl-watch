import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    certificates: defineTable({ domain: v.string(), issuer: v.string(), validFrom: v.string(), validTo: v.string(), status: v.string() }).index("by_domain", ["domain"]).index("by_status", ["status"]),
    domains: defineTable({ name: v.string(), autoRenew: v.boolean(), alertEmail: v.optional(v.string()) }),
    scans: defineTable({ domainId: v.id("domains"), ts: v.string(), passed: v.boolean(), details: v.string() })
});
