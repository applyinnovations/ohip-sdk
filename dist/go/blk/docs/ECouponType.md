# ECouponType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECouponId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Code** | Pointer to **string** | Code to attach the eCoupon to Reservation. | [optional] 
**Description** | Pointer to **string** | Description of the eCoupon attached to the Reservation. | [optional] 
**AutoAttached** | Pointer to **bool** | Determines whether the eCoupon is attached through the Rate Code or not. | [optional] 
**IssuedQuantity** | Pointer to **int32** | Assigned Quantity for the eCoupon when attached to Reservation. | [optional] 
**UsedQuantity** | Pointer to **int32** | Used Quantity of the eCoupon for the Reservation. | [optional] 
**Reason** | Pointer to **string** | Reason for attaching/modifing eCoupon. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate plan of the attached eCoupon to Reservation. | [optional] 
**WelcomeOffer** | Pointer to **bool** | Determines whether this eCoupon is eligible for welcome offer or not. | [optional] 

## Methods

### NewECouponType

`func NewECouponType() *ECouponType`

NewECouponType instantiates a new ECouponType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECouponTypeWithDefaults

`func NewECouponTypeWithDefaults() *ECouponType`

NewECouponTypeWithDefaults instantiates a new ECouponType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECouponId

`func (o *ECouponType) GetECouponId() UniqueIDType`

GetECouponId returns the ECouponId field if non-nil, zero value otherwise.

### GetECouponIdOk

`func (o *ECouponType) GetECouponIdOk() (*UniqueIDType, bool)`

GetECouponIdOk returns a tuple with the ECouponId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECouponId

`func (o *ECouponType) SetECouponId(v UniqueIDType)`

SetECouponId sets ECouponId field to given value.

### HasECouponId

`func (o *ECouponType) HasECouponId() bool`

HasECouponId returns a boolean if a field has been set.

### GetCode

`func (o *ECouponType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ECouponType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ECouponType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ECouponType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ECouponType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ECouponType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ECouponType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ECouponType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAutoAttached

`func (o *ECouponType) GetAutoAttached() bool`

GetAutoAttached returns the AutoAttached field if non-nil, zero value otherwise.

### GetAutoAttachedOk

`func (o *ECouponType) GetAutoAttachedOk() (*bool, bool)`

GetAutoAttachedOk returns a tuple with the AutoAttached field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoAttached

`func (o *ECouponType) SetAutoAttached(v bool)`

SetAutoAttached sets AutoAttached field to given value.

### HasAutoAttached

`func (o *ECouponType) HasAutoAttached() bool`

HasAutoAttached returns a boolean if a field has been set.

### GetIssuedQuantity

`func (o *ECouponType) GetIssuedQuantity() int32`

GetIssuedQuantity returns the IssuedQuantity field if non-nil, zero value otherwise.

### GetIssuedQuantityOk

`func (o *ECouponType) GetIssuedQuantityOk() (*int32, bool)`

GetIssuedQuantityOk returns a tuple with the IssuedQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssuedQuantity

`func (o *ECouponType) SetIssuedQuantity(v int32)`

SetIssuedQuantity sets IssuedQuantity field to given value.

### HasIssuedQuantity

`func (o *ECouponType) HasIssuedQuantity() bool`

HasIssuedQuantity returns a boolean if a field has been set.

### GetUsedQuantity

`func (o *ECouponType) GetUsedQuantity() int32`

GetUsedQuantity returns the UsedQuantity field if non-nil, zero value otherwise.

### GetUsedQuantityOk

`func (o *ECouponType) GetUsedQuantityOk() (*int32, bool)`

GetUsedQuantityOk returns a tuple with the UsedQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedQuantity

`func (o *ECouponType) SetUsedQuantity(v int32)`

SetUsedQuantity sets UsedQuantity field to given value.

### HasUsedQuantity

`func (o *ECouponType) HasUsedQuantity() bool`

HasUsedQuantity returns a boolean if a field has been set.

### GetReason

`func (o *ECouponType) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ECouponType) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ECouponType) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *ECouponType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ECouponType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ECouponType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ECouponType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ECouponType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *ECouponType) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *ECouponType) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *ECouponType) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *ECouponType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


