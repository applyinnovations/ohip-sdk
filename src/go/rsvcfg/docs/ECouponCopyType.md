# ECouponCopyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECouponCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Source property from which copy operation will happen. | [optional] 
**TargetHotelCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 

## Methods

### NewECouponCopyType

`func NewECouponCopyType() *ECouponCopyType`

NewECouponCopyType instantiates a new ECouponCopyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECouponCopyTypeWithDefaults

`func NewECouponCopyTypeWithDefaults() *ECouponCopyType`

NewECouponCopyTypeWithDefaults instantiates a new ECouponCopyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECouponCodes

`func (o *ECouponCopyType) GetECouponCodes() CodeListType`

GetECouponCodes returns the ECouponCodes field if non-nil, zero value otherwise.

### GetECouponCodesOk

`func (o *ECouponCopyType) GetECouponCodesOk() (*CodeListType, bool)`

GetECouponCodesOk returns a tuple with the ECouponCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECouponCodes

`func (o *ECouponCopyType) SetECouponCodes(v CodeListType)`

SetECouponCodes sets ECouponCodes field to given value.

### HasECouponCodes

`func (o *ECouponCopyType) HasECouponCodes() bool`

HasECouponCodes returns a boolean if a field has been set.

### GetHotelId

`func (o *ECouponCopyType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ECouponCopyType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ECouponCopyType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ECouponCopyType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTargetHotelCodes

`func (o *ECouponCopyType) GetTargetHotelCodes() CodeListType`

GetTargetHotelCodes returns the TargetHotelCodes field if non-nil, zero value otherwise.

### GetTargetHotelCodesOk

`func (o *ECouponCopyType) GetTargetHotelCodesOk() (*CodeListType, bool)`

GetTargetHotelCodesOk returns a tuple with the TargetHotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotelCodes

`func (o *ECouponCopyType) SetTargetHotelCodes(v CodeListType)`

SetTargetHotelCodes sets TargetHotelCodes field to given value.

### HasTargetHotelCodes

`func (o *ECouponCopyType) HasTargetHotelCodes() bool`

HasTargetHotelCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


