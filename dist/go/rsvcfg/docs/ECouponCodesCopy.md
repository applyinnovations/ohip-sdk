# ECouponCodesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECouponCopy** | Pointer to [**ECouponCopyType**](ECouponCopyType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewECouponCodesCopy

`func NewECouponCodesCopy() *ECouponCodesCopy`

NewECouponCodesCopy instantiates a new ECouponCodesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECouponCodesCopyWithDefaults

`func NewECouponCodesCopyWithDefaults() *ECouponCodesCopy`

NewECouponCodesCopyWithDefaults instantiates a new ECouponCodesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECouponCopy

`func (o *ECouponCodesCopy) GetECouponCopy() ECouponCopyType`

GetECouponCopy returns the ECouponCopy field if non-nil, zero value otherwise.

### GetECouponCopyOk

`func (o *ECouponCodesCopy) GetECouponCopyOk() (*ECouponCopyType, bool)`

GetECouponCopyOk returns a tuple with the ECouponCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECouponCopy

`func (o *ECouponCodesCopy) SetECouponCopy(v ECouponCopyType)`

SetECouponCopy sets ECouponCopy field to given value.

### HasECouponCopy

`func (o *ECouponCodesCopy) HasECouponCopy() bool`

HasECouponCopy returns a boolean if a field has been set.

### GetLinks

`func (o *ECouponCodesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ECouponCodesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ECouponCodesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ECouponCodesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ECouponCodesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ECouponCodesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ECouponCodesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ECouponCodesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


