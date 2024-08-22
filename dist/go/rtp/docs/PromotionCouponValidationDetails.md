# PromotionCouponValidationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CouponInfo** | Pointer to [**CouponInfoType**](CouponInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPromotionCouponValidationDetails

`func NewPromotionCouponValidationDetails() *PromotionCouponValidationDetails`

NewPromotionCouponValidationDetails instantiates a new PromotionCouponValidationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromotionCouponValidationDetailsWithDefaults

`func NewPromotionCouponValidationDetailsWithDefaults() *PromotionCouponValidationDetails`

NewPromotionCouponValidationDetailsWithDefaults instantiates a new PromotionCouponValidationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCouponInfo

`func (o *PromotionCouponValidationDetails) GetCouponInfo() CouponInfoType`

GetCouponInfo returns the CouponInfo field if non-nil, zero value otherwise.

### GetCouponInfoOk

`func (o *PromotionCouponValidationDetails) GetCouponInfoOk() (*CouponInfoType, bool)`

GetCouponInfoOk returns a tuple with the CouponInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCouponInfo

`func (o *PromotionCouponValidationDetails) SetCouponInfo(v CouponInfoType)`

SetCouponInfo sets CouponInfo field to given value.

### HasCouponInfo

`func (o *PromotionCouponValidationDetails) HasCouponInfo() bool`

HasCouponInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PromotionCouponValidationDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PromotionCouponValidationDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PromotionCouponValidationDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PromotionCouponValidationDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PromotionCouponValidationDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PromotionCouponValidationDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PromotionCouponValidationDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PromotionCouponValidationDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


