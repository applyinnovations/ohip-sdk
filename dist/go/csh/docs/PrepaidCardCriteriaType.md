# PrepaidCardCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel context for the Reservations. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**FirstName** | Pointer to **string** | Given name, first name or names. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**CardNo** | Pointer to **string** | Prepaid card / account number. | [optional] 
**CardNumberMasked** | Pointer to **string** | Masked Prepaid card / account number. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PinCode** | Pointer to **string** | Prepaid card pin code. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CardDetails** | Pointer to [**PrepaidCardDetailsType**](PrepaidCardDetailsType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**GiftCard** | Pointer to **bool** | Indicates a gift card type. | [optional] 
**PostChargeToRoom** | Pointer to **bool** |  | [optional] 
**SaleCriteria** | Pointer to [**SaleCriteriaType**](SaleCriteriaType.md) |  | [optional] 
**VendorInterfaceID** | Pointer to **float32** |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewPrepaidCardCriteriaType

`func NewPrepaidCardCriteriaType() *PrepaidCardCriteriaType`

NewPrepaidCardCriteriaType instantiates a new PrepaidCardCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardCriteriaTypeWithDefaults

`func NewPrepaidCardCriteriaTypeWithDefaults() *PrepaidCardCriteriaType`

NewPrepaidCardCriteriaTypeWithDefaults instantiates a new PrepaidCardCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PrepaidCardCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PrepaidCardCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PrepaidCardCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PrepaidCardCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *PrepaidCardCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PrepaidCardCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PrepaidCardCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PrepaidCardCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetName

`func (o *PrepaidCardCriteriaType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PrepaidCardCriteriaType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PrepaidCardCriteriaType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PrepaidCardCriteriaType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFirstName

`func (o *PrepaidCardCriteriaType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *PrepaidCardCriteriaType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *PrepaidCardCriteriaType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *PrepaidCardCriteriaType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetProfileId

`func (o *PrepaidCardCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *PrepaidCardCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *PrepaidCardCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *PrepaidCardCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetCardNo

`func (o *PrepaidCardCriteriaType) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *PrepaidCardCriteriaType) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *PrepaidCardCriteriaType) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *PrepaidCardCriteriaType) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetCardNumberMasked

`func (o *PrepaidCardCriteriaType) GetCardNumberMasked() string`

GetCardNumberMasked returns the CardNumberMasked field if non-nil, zero value otherwise.

### GetCardNumberMaskedOk

`func (o *PrepaidCardCriteriaType) GetCardNumberMaskedOk() (*string, bool)`

GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberMasked

`func (o *PrepaidCardCriteriaType) SetCardNumberMasked(v string)`

SetCardNumberMasked sets CardNumberMasked field to given value.

### HasCardNumberMasked

`func (o *PrepaidCardCriteriaType) HasCardNumberMasked() bool`

HasCardNumberMasked returns a boolean if a field has been set.

### GetAmount

`func (o *PrepaidCardCriteriaType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PrepaidCardCriteriaType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PrepaidCardCriteriaType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PrepaidCardCriteriaType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPinCode

`func (o *PrepaidCardCriteriaType) GetPinCode() string`

GetPinCode returns the PinCode field if non-nil, zero value otherwise.

### GetPinCodeOk

`func (o *PrepaidCardCriteriaType) GetPinCodeOk() (*string, bool)`

GetPinCodeOk returns a tuple with the PinCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPinCode

`func (o *PrepaidCardCriteriaType) SetPinCode(v string)`

SetPinCode sets PinCode field to given value.

### HasPinCode

`func (o *PrepaidCardCriteriaType) HasPinCode() bool`

HasPinCode returns a boolean if a field has been set.

### GetInterfaceId

`func (o *PrepaidCardCriteriaType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *PrepaidCardCriteriaType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *PrepaidCardCriteriaType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *PrepaidCardCriteriaType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetCardDetails

`func (o *PrepaidCardCriteriaType) GetCardDetails() PrepaidCardDetailsType`

GetCardDetails returns the CardDetails field if non-nil, zero value otherwise.

### GetCardDetailsOk

`func (o *PrepaidCardCriteriaType) GetCardDetailsOk() (*PrepaidCardDetailsType, bool)`

GetCardDetailsOk returns a tuple with the CardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardDetails

`func (o *PrepaidCardCriteriaType) SetCardDetails(v PrepaidCardDetailsType)`

SetCardDetails sets CardDetails field to given value.

### HasCardDetails

`func (o *PrepaidCardCriteriaType) HasCardDetails() bool`

HasCardDetails returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *PrepaidCardCriteriaType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *PrepaidCardCriteriaType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *PrepaidCardCriteriaType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *PrepaidCardCriteriaType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *PrepaidCardCriteriaType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *PrepaidCardCriteriaType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *PrepaidCardCriteriaType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *PrepaidCardCriteriaType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *PrepaidCardCriteriaType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *PrepaidCardCriteriaType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *PrepaidCardCriteriaType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *PrepaidCardCriteriaType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *PrepaidCardCriteriaType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *PrepaidCardCriteriaType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *PrepaidCardCriteriaType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *PrepaidCardCriteriaType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *PrepaidCardCriteriaType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *PrepaidCardCriteriaType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *PrepaidCardCriteriaType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *PrepaidCardCriteriaType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetGiftCard

`func (o *PrepaidCardCriteriaType) GetGiftCard() bool`

GetGiftCard returns the GiftCard field if non-nil, zero value otherwise.

### GetGiftCardOk

`func (o *PrepaidCardCriteriaType) GetGiftCardOk() (*bool, bool)`

GetGiftCardOk returns a tuple with the GiftCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGiftCard

`func (o *PrepaidCardCriteriaType) SetGiftCard(v bool)`

SetGiftCard sets GiftCard field to given value.

### HasGiftCard

`func (o *PrepaidCardCriteriaType) HasGiftCard() bool`

HasGiftCard returns a boolean if a field has been set.

### GetPostChargeToRoom

`func (o *PrepaidCardCriteriaType) GetPostChargeToRoom() bool`

GetPostChargeToRoom returns the PostChargeToRoom field if non-nil, zero value otherwise.

### GetPostChargeToRoomOk

`func (o *PrepaidCardCriteriaType) GetPostChargeToRoomOk() (*bool, bool)`

GetPostChargeToRoomOk returns a tuple with the PostChargeToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostChargeToRoom

`func (o *PrepaidCardCriteriaType) SetPostChargeToRoom(v bool)`

SetPostChargeToRoom sets PostChargeToRoom field to given value.

### HasPostChargeToRoom

`func (o *PrepaidCardCriteriaType) HasPostChargeToRoom() bool`

HasPostChargeToRoom returns a boolean if a field has been set.

### GetSaleCriteria

`func (o *PrepaidCardCriteriaType) GetSaleCriteria() SaleCriteriaType`

GetSaleCriteria returns the SaleCriteria field if non-nil, zero value otherwise.

### GetSaleCriteriaOk

`func (o *PrepaidCardCriteriaType) GetSaleCriteriaOk() (*SaleCriteriaType, bool)`

GetSaleCriteriaOk returns a tuple with the SaleCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaleCriteria

`func (o *PrepaidCardCriteriaType) SetSaleCriteria(v SaleCriteriaType)`

SetSaleCriteria sets SaleCriteria field to given value.

### HasSaleCriteria

`func (o *PrepaidCardCriteriaType) HasSaleCriteria() bool`

HasSaleCriteria returns a boolean if a field has been set.

### GetVendorInterfaceID

`func (o *PrepaidCardCriteriaType) GetVendorInterfaceID() float32`

GetVendorInterfaceID returns the VendorInterfaceID field if non-nil, zero value otherwise.

### GetVendorInterfaceIDOk

`func (o *PrepaidCardCriteriaType) GetVendorInterfaceIDOk() (*float32, bool)`

GetVendorInterfaceIDOk returns a tuple with the VendorInterfaceID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorInterfaceID

`func (o *PrepaidCardCriteriaType) SetVendorInterfaceID(v float32)`

SetVendorInterfaceID sets VendorInterfaceID field to given value.

### HasVendorInterfaceID

`func (o *PrepaidCardCriteriaType) HasVendorInterfaceID() bool`

HasVendorInterfaceID returns a boolean if a field has been set.

### GetCashierId

`func (o *PrepaidCardCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PrepaidCardCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PrepaidCardCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PrepaidCardCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


