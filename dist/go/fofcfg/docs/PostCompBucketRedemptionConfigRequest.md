# PostCompBucketRedemptionConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BucketRedemptionCodes** | Pointer to [**[]BucketRedemptionCodeType**](BucketRedemptionCodeType.md) | Details for Bucket Redemption codes along with associated transaction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCompBucketRedemptionConfigRequest

`func NewPostCompBucketRedemptionConfigRequest() *PostCompBucketRedemptionConfigRequest`

NewPostCompBucketRedemptionConfigRequest instantiates a new PostCompBucketRedemptionConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCompBucketRedemptionConfigRequestWithDefaults

`func NewPostCompBucketRedemptionConfigRequestWithDefaults() *PostCompBucketRedemptionConfigRequest`

NewPostCompBucketRedemptionConfigRequestWithDefaults instantiates a new PostCompBucketRedemptionConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBucketRedemptionCodes

`func (o *PostCompBucketRedemptionConfigRequest) GetBucketRedemptionCodes() []BucketRedemptionCodeType`

GetBucketRedemptionCodes returns the BucketRedemptionCodes field if non-nil, zero value otherwise.

### GetBucketRedemptionCodesOk

`func (o *PostCompBucketRedemptionConfigRequest) GetBucketRedemptionCodesOk() (*[]BucketRedemptionCodeType, bool)`

GetBucketRedemptionCodesOk returns a tuple with the BucketRedemptionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketRedemptionCodes

`func (o *PostCompBucketRedemptionConfigRequest) SetBucketRedemptionCodes(v []BucketRedemptionCodeType)`

SetBucketRedemptionCodes sets BucketRedemptionCodes field to given value.

### HasBucketRedemptionCodes

`func (o *PostCompBucketRedemptionConfigRequest) HasBucketRedemptionCodes() bool`

HasBucketRedemptionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostCompBucketRedemptionConfigRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCompBucketRedemptionConfigRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCompBucketRedemptionConfigRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCompBucketRedemptionConfigRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCompBucketRedemptionConfigRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCompBucketRedemptionConfigRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCompBucketRedemptionConfigRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCompBucketRedemptionConfigRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


