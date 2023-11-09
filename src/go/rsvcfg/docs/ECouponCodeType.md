# ECouponCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | eCoupon code to be configured. | [optional] 
**DefaultQty** | Pointer to **int32** | Defines the default quantity of the eCoupon Code. | [optional] 
**Description** | Pointer to **string** | Description of the eCoupon code to be configured. | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence for eCoupon code. | [optional] 
**Hotel** | Pointer to **string** | Property for which the eCoupon code belongs to. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the eCoupon code is active or not. | [optional] 
**PostingRoom** | Pointer to **string** | Pseudo Room where the postings should be diverted. | [optional] 
**RatePlans** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**WelcomeOffer** | Pointer to **bool** | Determines whether the eCoupon Code is eligible for Welcome Offer or not. | [optional] 

## Methods

### NewECouponCodeType

`func NewECouponCodeType() *ECouponCodeType`

NewECouponCodeType instantiates a new ECouponCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECouponCodeTypeWithDefaults

`func NewECouponCodeTypeWithDefaults() *ECouponCodeType`

NewECouponCodeTypeWithDefaults instantiates a new ECouponCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ECouponCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ECouponCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ECouponCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ECouponCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDefaultQty

`func (o *ECouponCodeType) GetDefaultQty() int32`

GetDefaultQty returns the DefaultQty field if non-nil, zero value otherwise.

### GetDefaultQtyOk

`func (o *ECouponCodeType) GetDefaultQtyOk() (*int32, bool)`

GetDefaultQtyOk returns a tuple with the DefaultQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultQty

`func (o *ECouponCodeType) SetDefaultQty(v int32)`

SetDefaultQty sets DefaultQty field to given value.

### HasDefaultQty

`func (o *ECouponCodeType) HasDefaultQty() bool`

HasDefaultQty returns a boolean if a field has been set.

### GetDescription

`func (o *ECouponCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ECouponCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ECouponCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ECouponCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *ECouponCodeType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *ECouponCodeType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *ECouponCodeType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *ECouponCodeType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetHotel

`func (o *ECouponCodeType) GetHotel() string`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *ECouponCodeType) GetHotelOk() (*string, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *ECouponCodeType) SetHotel(v string)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *ECouponCodeType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetInactive

`func (o *ECouponCodeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ECouponCodeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ECouponCodeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ECouponCodeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetPostingRoom

`func (o *ECouponCodeType) GetPostingRoom() string`

GetPostingRoom returns the PostingRoom field if non-nil, zero value otherwise.

### GetPostingRoomOk

`func (o *ECouponCodeType) GetPostingRoomOk() (*string, bool)`

GetPostingRoomOk returns a tuple with the PostingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRoom

`func (o *ECouponCodeType) SetPostingRoom(v string)`

SetPostingRoom sets PostingRoom field to given value.

### HasPostingRoom

`func (o *ECouponCodeType) HasPostingRoom() bool`

HasPostingRoom returns a boolean if a field has been set.

### GetRatePlans

`func (o *ECouponCodeType) GetRatePlans() CodeListType`

GetRatePlans returns the RatePlans field if non-nil, zero value otherwise.

### GetRatePlansOk

`func (o *ECouponCodeType) GetRatePlansOk() (*CodeListType, bool)`

GetRatePlansOk returns a tuple with the RatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlans

`func (o *ECouponCodeType) SetRatePlans(v CodeListType)`

SetRatePlans sets RatePlans field to given value.

### HasRatePlans

`func (o *ECouponCodeType) HasRatePlans() bool`

HasRatePlans returns a boolean if a field has been set.

### GetWelcomeOffer

`func (o *ECouponCodeType) GetWelcomeOffer() bool`

GetWelcomeOffer returns the WelcomeOffer field if non-nil, zero value otherwise.

### GetWelcomeOfferOk

`func (o *ECouponCodeType) GetWelcomeOfferOk() (*bool, bool)`

GetWelcomeOfferOk returns a tuple with the WelcomeOffer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWelcomeOffer

`func (o *ECouponCodeType) SetWelcomeOffer(v bool)`

SetWelcomeOffer sets WelcomeOffer field to given value.

### HasWelcomeOffer

`func (o *ECouponCodeType) HasWelcomeOffer() bool`

HasWelcomeOffer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


