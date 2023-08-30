# ActivatePrepaidCardCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**CardNo** | Pointer to **string** | Prepaid card number. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Pin** | Pointer to **string** | PIN code associated for the prepaid card. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**PostChargeToRoom** | Pointer to **bool** | Indicate that charges will be posted to the room. | [optional] 
**SaleCriteria** | Pointer to [**SaleCriteriaType**](SaleCriteriaType.md) |  | [optional] 

## Methods

### NewActivatePrepaidCardCriteria

`func NewActivatePrepaidCardCriteria() *ActivatePrepaidCardCriteria`

NewActivatePrepaidCardCriteria instantiates a new ActivatePrepaidCardCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivatePrepaidCardCriteriaWithDefaults

`func NewActivatePrepaidCardCriteriaWithDefaults() *ActivatePrepaidCardCriteria`

NewActivatePrepaidCardCriteriaWithDefaults instantiates a new ActivatePrepaidCardCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ActivatePrepaidCardCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ActivatePrepaidCardCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ActivatePrepaidCardCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ActivatePrepaidCardCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCardNo

`func (o *ActivatePrepaidCardCriteria) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *ActivatePrepaidCardCriteria) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *ActivatePrepaidCardCriteria) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *ActivatePrepaidCardCriteria) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetInterfaceId

`func (o *ActivatePrepaidCardCriteria) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *ActivatePrepaidCardCriteria) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *ActivatePrepaidCardCriteria) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *ActivatePrepaidCardCriteria) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetProfileId

`func (o *ActivatePrepaidCardCriteria) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ActivatePrepaidCardCriteria) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ActivatePrepaidCardCriteria) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ActivatePrepaidCardCriteria) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationId

`func (o *ActivatePrepaidCardCriteria) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ActivatePrepaidCardCriteria) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ActivatePrepaidCardCriteria) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ActivatePrepaidCardCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetPin

`func (o *ActivatePrepaidCardCriteria) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *ActivatePrepaidCardCriteria) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *ActivatePrepaidCardCriteria) SetPin(v string)`

SetPin sets Pin field to given value.

### HasPin

`func (o *ActivatePrepaidCardCriteria) HasPin() bool`

HasPin returns a boolean if a field has been set.

### GetAmount

`func (o *ActivatePrepaidCardCriteria) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ActivatePrepaidCardCriteria) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ActivatePrepaidCardCriteria) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ActivatePrepaidCardCriteria) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCashierId

`func (o *ActivatePrepaidCardCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ActivatePrepaidCardCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ActivatePrepaidCardCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ActivatePrepaidCardCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetPostChargeToRoom

`func (o *ActivatePrepaidCardCriteria) GetPostChargeToRoom() bool`

GetPostChargeToRoom returns the PostChargeToRoom field if non-nil, zero value otherwise.

### GetPostChargeToRoomOk

`func (o *ActivatePrepaidCardCriteria) GetPostChargeToRoomOk() (*bool, bool)`

GetPostChargeToRoomOk returns a tuple with the PostChargeToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostChargeToRoom

`func (o *ActivatePrepaidCardCriteria) SetPostChargeToRoom(v bool)`

SetPostChargeToRoom sets PostChargeToRoom field to given value.

### HasPostChargeToRoom

`func (o *ActivatePrepaidCardCriteria) HasPostChargeToRoom() bool`

HasPostChargeToRoom returns a boolean if a field has been set.

### GetSaleCriteria

`func (o *ActivatePrepaidCardCriteria) GetSaleCriteria() SaleCriteriaType`

GetSaleCriteria returns the SaleCriteria field if non-nil, zero value otherwise.

### GetSaleCriteriaOk

`func (o *ActivatePrepaidCardCriteria) GetSaleCriteriaOk() (*SaleCriteriaType, bool)`

GetSaleCriteriaOk returns a tuple with the SaleCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaleCriteria

`func (o *ActivatePrepaidCardCriteria) SetSaleCriteria(v SaleCriteriaType)`

SetSaleCriteria sets SaleCriteria field to given value.

### HasSaleCriteria

`func (o *ActivatePrepaidCardCriteria) HasSaleCriteria() bool`

HasSaleCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


