# RevenueBucketTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueBucketTypes** | Pointer to [**[]RevenueBucketTypeType**](RevenueBucketTypeType.md) | Holds Revenue Bucket Type details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRevenueBucketTypes

`func NewRevenueBucketTypes() *RevenueBucketTypes`

NewRevenueBucketTypes instantiates a new RevenueBucketTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueBucketTypesWithDefaults

`func NewRevenueBucketTypesWithDefaults() *RevenueBucketTypes`

NewRevenueBucketTypesWithDefaults instantiates a new RevenueBucketTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueBucketTypes

`func (o *RevenueBucketTypes) GetRevenueBucketTypes() []RevenueBucketTypeType`

GetRevenueBucketTypes returns the RevenueBucketTypes field if non-nil, zero value otherwise.

### GetRevenueBucketTypesOk

`func (o *RevenueBucketTypes) GetRevenueBucketTypesOk() (*[]RevenueBucketTypeType, bool)`

GetRevenueBucketTypesOk returns a tuple with the RevenueBucketTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketTypes

`func (o *RevenueBucketTypes) SetRevenueBucketTypes(v []RevenueBucketTypeType)`

SetRevenueBucketTypes sets RevenueBucketTypes field to given value.

### HasRevenueBucketTypes

`func (o *RevenueBucketTypes) HasRevenueBucketTypes() bool`

HasRevenueBucketTypes returns a boolean if a field has been set.

### GetLinks

`func (o *RevenueBucketTypes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RevenueBucketTypes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RevenueBucketTypes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RevenueBucketTypes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RevenueBucketTypes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RevenueBucketTypes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RevenueBucketTypes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RevenueBucketTypes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


