# BulkPrepaidCardCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel context for the Reservations. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**FirstName** | Pointer to **string** | Given name, first name or names. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**PostChargeToRoom** | Pointer to **bool** |  | [optional] 
**SaleCriteria** | Pointer to [**SaleCriteriaType**](SaleCriteriaType.md) |  | [optional] 
**VendorInterfaceID** | Pointer to **float32** |  | [optional] 
**CashierId** | Pointer to **float32** |  | [optional] 
**GiftCard** | Pointer to **bool** | Indicates a gift card type. | [optional] 

## Methods

### NewBulkPrepaidCardCriteriaType

`func NewBulkPrepaidCardCriteriaType() *BulkPrepaidCardCriteriaType`

NewBulkPrepaidCardCriteriaType instantiates a new BulkPrepaidCardCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkPrepaidCardCriteriaTypeWithDefaults

`func NewBulkPrepaidCardCriteriaTypeWithDefaults() *BulkPrepaidCardCriteriaType`

NewBulkPrepaidCardCriteriaTypeWithDefaults instantiates a new BulkPrepaidCardCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BulkPrepaidCardCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BulkPrepaidCardCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BulkPrepaidCardCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BulkPrepaidCardCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *BulkPrepaidCardCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *BulkPrepaidCardCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *BulkPrepaidCardCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *BulkPrepaidCardCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetName

`func (o *BulkPrepaidCardCriteriaType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BulkPrepaidCardCriteriaType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BulkPrepaidCardCriteriaType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BulkPrepaidCardCriteriaType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFirstName

`func (o *BulkPrepaidCardCriteriaType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *BulkPrepaidCardCriteriaType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *BulkPrepaidCardCriteriaType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *BulkPrepaidCardCriteriaType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetProfileId

`func (o *BulkPrepaidCardCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *BulkPrepaidCardCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *BulkPrepaidCardCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *BulkPrepaidCardCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetInterfaceId

`func (o *BulkPrepaidCardCriteriaType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *BulkPrepaidCardCriteriaType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *BulkPrepaidCardCriteriaType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *BulkPrepaidCardCriteriaType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *BulkPrepaidCardCriteriaType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *BulkPrepaidCardCriteriaType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *BulkPrepaidCardCriteriaType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *BulkPrepaidCardCriteriaType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *BulkPrepaidCardCriteriaType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *BulkPrepaidCardCriteriaType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *BulkPrepaidCardCriteriaType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *BulkPrepaidCardCriteriaType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetPostChargeToRoom

`func (o *BulkPrepaidCardCriteriaType) GetPostChargeToRoom() bool`

GetPostChargeToRoom returns the PostChargeToRoom field if non-nil, zero value otherwise.

### GetPostChargeToRoomOk

`func (o *BulkPrepaidCardCriteriaType) GetPostChargeToRoomOk() (*bool, bool)`

GetPostChargeToRoomOk returns a tuple with the PostChargeToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostChargeToRoom

`func (o *BulkPrepaidCardCriteriaType) SetPostChargeToRoom(v bool)`

SetPostChargeToRoom sets PostChargeToRoom field to given value.

### HasPostChargeToRoom

`func (o *BulkPrepaidCardCriteriaType) HasPostChargeToRoom() bool`

HasPostChargeToRoom returns a boolean if a field has been set.

### GetSaleCriteria

`func (o *BulkPrepaidCardCriteriaType) GetSaleCriteria() SaleCriteriaType`

GetSaleCriteria returns the SaleCriteria field if non-nil, zero value otherwise.

### GetSaleCriteriaOk

`func (o *BulkPrepaidCardCriteriaType) GetSaleCriteriaOk() (*SaleCriteriaType, bool)`

GetSaleCriteriaOk returns a tuple with the SaleCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaleCriteria

`func (o *BulkPrepaidCardCriteriaType) SetSaleCriteria(v SaleCriteriaType)`

SetSaleCriteria sets SaleCriteria field to given value.

### HasSaleCriteria

`func (o *BulkPrepaidCardCriteriaType) HasSaleCriteria() bool`

HasSaleCriteria returns a boolean if a field has been set.

### GetVendorInterfaceID

`func (o *BulkPrepaidCardCriteriaType) GetVendorInterfaceID() float32`

GetVendorInterfaceID returns the VendorInterfaceID field if non-nil, zero value otherwise.

### GetVendorInterfaceIDOk

`func (o *BulkPrepaidCardCriteriaType) GetVendorInterfaceIDOk() (*float32, bool)`

GetVendorInterfaceIDOk returns a tuple with the VendorInterfaceID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorInterfaceID

`func (o *BulkPrepaidCardCriteriaType) SetVendorInterfaceID(v float32)`

SetVendorInterfaceID sets VendorInterfaceID field to given value.

### HasVendorInterfaceID

`func (o *BulkPrepaidCardCriteriaType) HasVendorInterfaceID() bool`

HasVendorInterfaceID returns a boolean if a field has been set.

### GetCashierId

`func (o *BulkPrepaidCardCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *BulkPrepaidCardCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *BulkPrepaidCardCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *BulkPrepaidCardCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetGiftCard

`func (o *BulkPrepaidCardCriteriaType) GetGiftCard() bool`

GetGiftCard returns the GiftCard field if non-nil, zero value otherwise.

### GetGiftCardOk

`func (o *BulkPrepaidCardCriteriaType) GetGiftCardOk() (*bool, bool)`

GetGiftCardOk returns a tuple with the GiftCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGiftCard

`func (o *BulkPrepaidCardCriteriaType) SetGiftCard(v bool)`

SetGiftCard sets GiftCard field to given value.

### HasGiftCard

`func (o *BulkPrepaidCardCriteriaType) HasGiftCard() bool`

HasGiftCard returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


