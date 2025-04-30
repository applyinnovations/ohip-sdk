# ECouponCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECouponCodes** | Pointer to [**[]ECouponCodeType**](ECouponCodeType.md) | List of eCoupon Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewECouponCodes

`func NewECouponCodes() *ECouponCodes`

NewECouponCodes instantiates a new ECouponCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECouponCodesWithDefaults

`func NewECouponCodesWithDefaults() *ECouponCodes`

NewECouponCodesWithDefaults instantiates a new ECouponCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECouponCodes

`func (o *ECouponCodes) GetECouponCodes() []ECouponCodeType`

GetECouponCodes returns the ECouponCodes field if non-nil, zero value otherwise.

### GetECouponCodesOk

`func (o *ECouponCodes) GetECouponCodesOk() (*[]ECouponCodeType, bool)`

GetECouponCodesOk returns a tuple with the ECouponCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECouponCodes

`func (o *ECouponCodes) SetECouponCodes(v []ECouponCodeType)`

SetECouponCodes sets ECouponCodes field to given value.

### HasECouponCodes

`func (o *ECouponCodes) HasECouponCodes() bool`

HasECouponCodes returns a boolean if a field has been set.

### GetLinks

`func (o *ECouponCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ECouponCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ECouponCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ECouponCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ECouponCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ECouponCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ECouponCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ECouponCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


