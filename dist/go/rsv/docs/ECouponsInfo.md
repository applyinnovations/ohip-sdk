# ECouponsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ECoupons** | Pointer to [**[]ECouponType**](ECouponType.md) | Collection of ECouponType object. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewECouponsInfo

`func NewECouponsInfo() *ECouponsInfo`

NewECouponsInfo instantiates a new ECouponsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewECouponsInfoWithDefaults

`func NewECouponsInfoWithDefaults() *ECouponsInfo`

NewECouponsInfoWithDefaults instantiates a new ECouponsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetECoupons

`func (o *ECouponsInfo) GetECoupons() []ECouponType`

GetECoupons returns the ECoupons field if non-nil, zero value otherwise.

### GetECouponsOk

`func (o *ECouponsInfo) GetECouponsOk() (*[]ECouponType, bool)`

GetECouponsOk returns a tuple with the ECoupons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECoupons

`func (o *ECouponsInfo) SetECoupons(v []ECouponType)`

SetECoupons sets ECoupons field to given value.

### HasECoupons

`func (o *ECouponsInfo) HasECoupons() bool`

HasECoupons returns a boolean if a field has been set.

### GetHotelId

`func (o *ECouponsInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ECouponsInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ECouponsInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ECouponsInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ECouponsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ECouponsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ECouponsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ECouponsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *ECouponsInfo) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ECouponsInfo) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ECouponsInfo) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ECouponsInfo) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *ECouponsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ECouponsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ECouponsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ECouponsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

