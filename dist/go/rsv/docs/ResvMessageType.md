# ResvMessageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessageText** | Pointer to **string** | Message Content | [optional] 
**MessageDate** | Pointer to **string** | Date the message was created | [optional] 
**TypeOfMessage** | Pointer to [**TypeOfMessageType**](TypeOfMessageType.md) |  | [optional] 
**Recipient** | Pointer to **string** | Recipient of the Message | [optional] 
**Operator** | Pointer to **string** | User who created the Message | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RoomId** | Pointer to **string** | Display room number if it has been assigned. | [optional] 
**ReservationStatus** | Pointer to **string** | Status of the reservation. | [optional] 
**NoOfNights** | Pointer to **int32** | shows the number of nights for the reservation. | [optional] 
**GuestNameId** | Pointer to **int32** | shows the Id of the Guest. | [optional] 
**DepartureDate** | Pointer to **string** | Display the departure date of the guest. | [optional] 
**ArrivalDate** | Pointer to **string** | Display the arrival date of the guest. | [optional] 
**ConfirmationNo** | Pointer to **string** | Confirmation number of the reservation. | [optional] 
**BlockCode** | Pointer to **string** | Display the block code associated with the reservation. | [optional] 
**GuaranteeCode** | Pointer to **string** | Guarantee Code. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**RoomStatus** | Pointer to **string** | Display the status of the Room. | [optional] 

## Methods

### NewResvMessageType

`func NewResvMessageType() *ResvMessageType`

NewResvMessageType instantiates a new ResvMessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvMessageTypeWithDefaults

`func NewResvMessageTypeWithDefaults() *ResvMessageType`

NewResvMessageTypeWithDefaults instantiates a new ResvMessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessageText

`func (o *ResvMessageType) GetMessageText() string`

GetMessageText returns the MessageText field if non-nil, zero value otherwise.

### GetMessageTextOk

`func (o *ResvMessageType) GetMessageTextOk() (*string, bool)`

GetMessageTextOk returns a tuple with the MessageText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageText

`func (o *ResvMessageType) SetMessageText(v string)`

SetMessageText sets MessageText field to given value.

### HasMessageText

`func (o *ResvMessageType) HasMessageText() bool`

HasMessageText returns a boolean if a field has been set.

### GetMessageDate

`func (o *ResvMessageType) GetMessageDate() string`

GetMessageDate returns the MessageDate field if non-nil, zero value otherwise.

### GetMessageDateOk

`func (o *ResvMessageType) GetMessageDateOk() (*string, bool)`

GetMessageDateOk returns a tuple with the MessageDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageDate

`func (o *ResvMessageType) SetMessageDate(v string)`

SetMessageDate sets MessageDate field to given value.

### HasMessageDate

`func (o *ResvMessageType) HasMessageDate() bool`

HasMessageDate returns a boolean if a field has been set.

### GetTypeOfMessage

`func (o *ResvMessageType) GetTypeOfMessage() TypeOfMessageType`

GetTypeOfMessage returns the TypeOfMessage field if non-nil, zero value otherwise.

### GetTypeOfMessageOk

`func (o *ResvMessageType) GetTypeOfMessageOk() (*TypeOfMessageType, bool)`

GetTypeOfMessageOk returns a tuple with the TypeOfMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeOfMessage

`func (o *ResvMessageType) SetTypeOfMessage(v TypeOfMessageType)`

SetTypeOfMessage sets TypeOfMessage field to given value.

### HasTypeOfMessage

`func (o *ResvMessageType) HasTypeOfMessage() bool`

HasTypeOfMessage returns a boolean if a field has been set.

### GetRecipient

`func (o *ResvMessageType) GetRecipient() string`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *ResvMessageType) GetRecipientOk() (*string, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *ResvMessageType) SetRecipient(v string)`

SetRecipient sets Recipient field to given value.

### HasRecipient

`func (o *ResvMessageType) HasRecipient() bool`

HasRecipient returns a boolean if a field has been set.

### GetOperator

`func (o *ResvMessageType) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ResvMessageType) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ResvMessageType) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *ResvMessageType) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetReservationId

`func (o *ResvMessageType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ResvMessageType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ResvMessageType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ResvMessageType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoomId

`func (o *ResvMessageType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ResvMessageType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ResvMessageType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ResvMessageType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetReservationStatus

`func (o *ResvMessageType) GetReservationStatus() string`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *ResvMessageType) GetReservationStatusOk() (*string, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *ResvMessageType) SetReservationStatus(v string)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *ResvMessageType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetNoOfNights

`func (o *ResvMessageType) GetNoOfNights() int32`

GetNoOfNights returns the NoOfNights field if non-nil, zero value otherwise.

### GetNoOfNightsOk

`func (o *ResvMessageType) GetNoOfNightsOk() (*int32, bool)`

GetNoOfNightsOk returns a tuple with the NoOfNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfNights

`func (o *ResvMessageType) SetNoOfNights(v int32)`

SetNoOfNights sets NoOfNights field to given value.

### HasNoOfNights

`func (o *ResvMessageType) HasNoOfNights() bool`

HasNoOfNights returns a boolean if a field has been set.

### GetGuestNameId

`func (o *ResvMessageType) GetGuestNameId() int32`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *ResvMessageType) GetGuestNameIdOk() (*int32, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *ResvMessageType) SetGuestNameId(v int32)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *ResvMessageType) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetDepartureDate

`func (o *ResvMessageType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *ResvMessageType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *ResvMessageType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *ResvMessageType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetArrivalDate

`func (o *ResvMessageType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ResvMessageType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ResvMessageType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ResvMessageType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *ResvMessageType) GetConfirmationNo() string`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *ResvMessageType) GetConfirmationNoOk() (*string, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *ResvMessageType) SetConfirmationNo(v string)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *ResvMessageType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetBlockCode

`func (o *ResvMessageType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *ResvMessageType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *ResvMessageType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *ResvMessageType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *ResvMessageType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *ResvMessageType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *ResvMessageType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *ResvMessageType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetBlockId

`func (o *ResvMessageType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ResvMessageType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ResvMessageType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ResvMessageType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetRoomStatus

`func (o *ResvMessageType) GetRoomStatus() string`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *ResvMessageType) GetRoomStatusOk() (*string, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *ResvMessageType) SetRoomStatus(v string)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *ResvMessageType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


