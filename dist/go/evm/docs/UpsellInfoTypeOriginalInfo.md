# UpsellInfoTypeOriginalInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RentalCode** | Pointer to **string** | The Rate Code of the Reservation before it was upgraded | [optional] 
**TotalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Nights** | Pointer to **int32** | The number of nights of the reservation before being upgraded. | [optional] 

## Methods

### NewUpsellInfoTypeOriginalInfo

`func NewUpsellInfoTypeOriginalInfo() *UpsellInfoTypeOriginalInfo`

NewUpsellInfoTypeOriginalInfo instantiates a new UpsellInfoTypeOriginalInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellInfoTypeOriginalInfoWithDefaults

`func NewUpsellInfoTypeOriginalInfoWithDefaults() *UpsellInfoTypeOriginalInfo`

NewUpsellInfoTypeOriginalInfoWithDefaults instantiates a new UpsellInfoTypeOriginalInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRentalCode

`func (o *UpsellInfoTypeOriginalInfo) GetRentalCode() string`

GetRentalCode returns the RentalCode field if non-nil, zero value otherwise.

### GetRentalCodeOk

`func (o *UpsellInfoTypeOriginalInfo) GetRentalCodeOk() (*string, bool)`

GetRentalCodeOk returns a tuple with the RentalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCode

`func (o *UpsellInfoTypeOriginalInfo) SetRentalCode(v string)`

SetRentalCode sets RentalCode field to given value.

### HasRentalCode

`func (o *UpsellInfoTypeOriginalInfo) HasRentalCode() bool`

HasRentalCode returns a boolean if a field has been set.

### GetTotalAmount

`func (o *UpsellInfoTypeOriginalInfo) GetTotalAmount() CurrencyAmountType`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *UpsellInfoTypeOriginalInfo) GetTotalAmountOk() (*CurrencyAmountType, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *UpsellInfoTypeOriginalInfo) SetTotalAmount(v CurrencyAmountType)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *UpsellInfoTypeOriginalInfo) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetRoomType

`func (o *UpsellInfoTypeOriginalInfo) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *UpsellInfoTypeOriginalInfo) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *UpsellInfoTypeOriginalInfo) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *UpsellInfoTypeOriginalInfo) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetNights

`func (o *UpsellInfoTypeOriginalInfo) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *UpsellInfoTypeOriginalInfo) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *UpsellInfoTypeOriginalInfo) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *UpsellInfoTypeOriginalInfo) HasNights() bool`

HasNights returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


