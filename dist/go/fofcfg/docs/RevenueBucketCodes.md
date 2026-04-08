# RevenueBucketCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueBucketCodes** | Pointer to [**[]RevenueBucketCodeType**](RevenueBucketCodeType.md) | Details for Revenue Bucket codes along with associated transaction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRevenueBucketCodes

`func NewRevenueBucketCodes() *RevenueBucketCodes`

NewRevenueBucketCodes instantiates a new RevenueBucketCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueBucketCodesWithDefaults

`func NewRevenueBucketCodesWithDefaults() *RevenueBucketCodes`

NewRevenueBucketCodesWithDefaults instantiates a new RevenueBucketCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueBucketCodes

`func (o *RevenueBucketCodes) GetRevenueBucketCodes() []RevenueBucketCodeType`

GetRevenueBucketCodes returns the RevenueBucketCodes field if non-nil, zero value otherwise.

### GetRevenueBucketCodesOk

`func (o *RevenueBucketCodes) GetRevenueBucketCodesOk() (*[]RevenueBucketCodeType, bool)`

GetRevenueBucketCodesOk returns a tuple with the RevenueBucketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketCodes

`func (o *RevenueBucketCodes) SetRevenueBucketCodes(v []RevenueBucketCodeType)`

SetRevenueBucketCodes sets RevenueBucketCodes field to given value.

### HasRevenueBucketCodes

`func (o *RevenueBucketCodes) HasRevenueBucketCodes() bool`

HasRevenueBucketCodes returns a boolean if a field has been set.

### GetLinks

`func (o *RevenueBucketCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RevenueBucketCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RevenueBucketCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RevenueBucketCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RevenueBucketCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RevenueBucketCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RevenueBucketCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RevenueBucketCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


