# PrepaidCardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CardDetails** | Pointer to [**PrepaidCardDetailsType**](PrepaidCardDetailsType.md) |  | [optional] 
**CardNo** | Pointer to **string** | Prepaid card / account number. | [optional] 
**CardNumberMasked** | Pointer to **string** | Masked Prepaid card / account number. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**FirstName** | Pointer to **string** | Given name, first name or names. | [optional] 
**GiftCard** | Pointer to **bool** | Indicates a gift card type. | [optional] 
**HotelId** | Pointer to **string** | Hotel context for the Reservations. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**PinCode** | Pointer to **string** | Prepaid card pin code. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewPrepaidCardType

`func NewPrepaidCardType() *PrepaidCardType`

NewPrepaidCardType instantiates a new PrepaidCardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardTypeWithDefaults

`func NewPrepaidCardTypeWithDefaults() *PrepaidCardType`

NewPrepaidCardTypeWithDefaults instantiates a new PrepaidCardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PrepaidCardType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PrepaidCardType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PrepaidCardType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PrepaidCardType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCardDetails

`func (o *PrepaidCardType) GetCardDetails() PrepaidCardDetailsType`

GetCardDetails returns the CardDetails field if non-nil, zero value otherwise.

### GetCardDetailsOk

`func (o *PrepaidCardType) GetCardDetailsOk() (*PrepaidCardDetailsType, bool)`

GetCardDetailsOk returns a tuple with the CardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardDetails

`func (o *PrepaidCardType) SetCardDetails(v PrepaidCardDetailsType)`

SetCardDetails sets CardDetails field to given value.

### HasCardDetails

`func (o *PrepaidCardType) HasCardDetails() bool`

HasCardDetails returns a boolean if a field has been set.

### GetCardNo

`func (o *PrepaidCardType) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *PrepaidCardType) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *PrepaidCardType) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *PrepaidCardType) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetCardNumberMasked

`func (o *PrepaidCardType) GetCardNumberMasked() string`

GetCardNumberMasked returns the CardNumberMasked field if non-nil, zero value otherwise.

### GetCardNumberMaskedOk

`func (o *PrepaidCardType) GetCardNumberMaskedOk() (*string, bool)`

GetCardNumberMaskedOk returns a tuple with the CardNumberMasked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumberMasked

`func (o *PrepaidCardType) SetCardNumberMasked(v string)`

SetCardNumberMasked sets CardNumberMasked field to given value.

### HasCardNumberMasked

`func (o *PrepaidCardType) HasCardNumberMasked() bool`

HasCardNumberMasked returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *PrepaidCardType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *PrepaidCardType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *PrepaidCardType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *PrepaidCardType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *PrepaidCardType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *PrepaidCardType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *PrepaidCardType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *PrepaidCardType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetFirstName

`func (o *PrepaidCardType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *PrepaidCardType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *PrepaidCardType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *PrepaidCardType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetGiftCard

`func (o *PrepaidCardType) GetGiftCard() bool`

GetGiftCard returns the GiftCard field if non-nil, zero value otherwise.

### GetGiftCardOk

`func (o *PrepaidCardType) GetGiftCardOk() (*bool, bool)`

GetGiftCardOk returns a tuple with the GiftCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGiftCard

`func (o *PrepaidCardType) SetGiftCard(v bool)`

SetGiftCard sets GiftCard field to given value.

### HasGiftCard

`func (o *PrepaidCardType) HasGiftCard() bool`

HasGiftCard returns a boolean if a field has been set.

### GetHotelId

`func (o *PrepaidCardType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PrepaidCardType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PrepaidCardType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PrepaidCardType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceId

`func (o *PrepaidCardType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *PrepaidCardType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *PrepaidCardType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *PrepaidCardType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetLastModifierId

`func (o *PrepaidCardType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *PrepaidCardType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *PrepaidCardType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *PrepaidCardType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *PrepaidCardType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *PrepaidCardType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *PrepaidCardType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *PrepaidCardType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetName

`func (o *PrepaidCardType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PrepaidCardType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PrepaidCardType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PrepaidCardType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPinCode

`func (o *PrepaidCardType) GetPinCode() string`

GetPinCode returns the PinCode field if non-nil, zero value otherwise.

### GetPinCodeOk

`func (o *PrepaidCardType) GetPinCodeOk() (*string, bool)`

GetPinCodeOk returns a tuple with the PinCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPinCode

`func (o *PrepaidCardType) SetPinCode(v string)`

SetPinCode sets PinCode field to given value.

### HasPinCode

`func (o *PrepaidCardType) HasPinCode() bool`

HasPinCode returns a boolean if a field has been set.

### GetProfileId

`func (o *PrepaidCardType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *PrepaidCardType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *PrepaidCardType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *PrepaidCardType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *PrepaidCardType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *PrepaidCardType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *PrepaidCardType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *PrepaidCardType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetReservationId

`func (o *PrepaidCardType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PrepaidCardType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PrepaidCardType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PrepaidCardType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


