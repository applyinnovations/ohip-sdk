# CompBucketRedemptionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BucketRedemptionCodes** | Pointer to [**[]BucketRedemptionCodeType**](BucketRedemptionCodeType.md) | Details for Bucket Redemption codes along with associated transaction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompBucketRedemptionConfig

`func NewCompBucketRedemptionConfig() *CompBucketRedemptionConfig`

NewCompBucketRedemptionConfig instantiates a new CompBucketRedemptionConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompBucketRedemptionConfigWithDefaults

`func NewCompBucketRedemptionConfigWithDefaults() *CompBucketRedemptionConfig`

NewCompBucketRedemptionConfigWithDefaults instantiates a new CompBucketRedemptionConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBucketRedemptionCodes

`func (o *CompBucketRedemptionConfig) GetBucketRedemptionCodes() []BucketRedemptionCodeType`

GetBucketRedemptionCodes returns the BucketRedemptionCodes field if non-nil, zero value otherwise.

### GetBucketRedemptionCodesOk

`func (o *CompBucketRedemptionConfig) GetBucketRedemptionCodesOk() (*[]BucketRedemptionCodeType, bool)`

GetBucketRedemptionCodesOk returns a tuple with the BucketRedemptionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketRedemptionCodes

`func (o *CompBucketRedemptionConfig) SetBucketRedemptionCodes(v []BucketRedemptionCodeType)`

SetBucketRedemptionCodes sets BucketRedemptionCodes field to given value.

### HasBucketRedemptionCodes

`func (o *CompBucketRedemptionConfig) HasBucketRedemptionCodes() bool`

HasBucketRedemptionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CompBucketRedemptionConfig) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompBucketRedemptionConfig) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompBucketRedemptionConfig) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompBucketRedemptionConfig) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompBucketRedemptionConfig) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompBucketRedemptionConfig) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompBucketRedemptionConfig) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompBucketRedemptionConfig) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


