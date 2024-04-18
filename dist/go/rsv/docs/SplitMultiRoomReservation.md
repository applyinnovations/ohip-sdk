# SplitMultiRoomReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyPaymentInformation** | Pointer to **bool** | Flag to instruct the operation to copy payment methods of the original reservation to the new reservation to be created. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**LockHandle** | Pointer to **float32** | An identifier representing the record lock for the reservation under process. When passed, the operation will verify that the lock is still valid. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationPaymentMethods** | Pointer to [**CopyReservationPaymentMethodsType**](CopyReservationPaymentMethodsType.md) |  | [optional] 
**ResponseInstructions** | Pointer to [**SplitMultiRoomReservationResponseInstructions**](SplitMultiRoomReservationResponseInstructions.md) |  | [optional] 
**SplitAll** | Pointer to **bool** | If set to TRUE, the reservation will be separated into number of rooms that it currently has. Otherwise, only 1 single room reservation will be created and the original reservation will be deducted with 1 room. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSplitMultiRoomReservation

`func NewSplitMultiRoomReservation() *SplitMultiRoomReservation`

NewSplitMultiRoomReservation instantiates a new SplitMultiRoomReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitMultiRoomReservationWithDefaults

`func NewSplitMultiRoomReservationWithDefaults() *SplitMultiRoomReservation`

NewSplitMultiRoomReservationWithDefaults instantiates a new SplitMultiRoomReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyPaymentInformation

`func (o *SplitMultiRoomReservation) GetCopyPaymentInformation() bool`

GetCopyPaymentInformation returns the CopyPaymentInformation field if non-nil, zero value otherwise.

### GetCopyPaymentInformationOk

`func (o *SplitMultiRoomReservation) GetCopyPaymentInformationOk() (*bool, bool)`

GetCopyPaymentInformationOk returns a tuple with the CopyPaymentInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyPaymentInformation

`func (o *SplitMultiRoomReservation) SetCopyPaymentInformation(v bool)`

SetCopyPaymentInformation sets CopyPaymentInformation field to given value.

### HasCopyPaymentInformation

`func (o *SplitMultiRoomReservation) HasCopyPaymentInformation() bool`

HasCopyPaymentInformation returns a boolean if a field has been set.

### GetLinks

`func (o *SplitMultiRoomReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SplitMultiRoomReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SplitMultiRoomReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SplitMultiRoomReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLockHandle

`func (o *SplitMultiRoomReservation) GetLockHandle() float32`

GetLockHandle returns the LockHandle field if non-nil, zero value otherwise.

### GetLockHandleOk

`func (o *SplitMultiRoomReservation) GetLockHandleOk() (*float32, bool)`

GetLockHandleOk returns a tuple with the LockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockHandle

`func (o *SplitMultiRoomReservation) SetLockHandle(v float32)`

SetLockHandle sets LockHandle field to given value.

### HasLockHandle

`func (o *SplitMultiRoomReservation) HasLockHandle() bool`

HasLockHandle returns a boolean if a field has been set.

### GetReservationId

`func (o *SplitMultiRoomReservation) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *SplitMultiRoomReservation) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *SplitMultiRoomReservation) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *SplitMultiRoomReservation) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationPaymentMethods

`func (o *SplitMultiRoomReservation) GetReservationPaymentMethods() CopyReservationPaymentMethodsType`

GetReservationPaymentMethods returns the ReservationPaymentMethods field if non-nil, zero value otherwise.

### GetReservationPaymentMethodsOk

`func (o *SplitMultiRoomReservation) GetReservationPaymentMethodsOk() (*CopyReservationPaymentMethodsType, bool)`

GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethods

`func (o *SplitMultiRoomReservation) SetReservationPaymentMethods(v CopyReservationPaymentMethodsType)`

SetReservationPaymentMethods sets ReservationPaymentMethods field to given value.

### HasReservationPaymentMethods

`func (o *SplitMultiRoomReservation) HasReservationPaymentMethods() bool`

HasReservationPaymentMethods returns a boolean if a field has been set.

### GetResponseInstructions

`func (o *SplitMultiRoomReservation) GetResponseInstructions() SplitMultiRoomReservationResponseInstructions`

GetResponseInstructions returns the ResponseInstructions field if non-nil, zero value otherwise.

### GetResponseInstructionsOk

`func (o *SplitMultiRoomReservation) GetResponseInstructionsOk() (*SplitMultiRoomReservationResponseInstructions, bool)`

GetResponseInstructionsOk returns a tuple with the ResponseInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstructions

`func (o *SplitMultiRoomReservation) SetResponseInstructions(v SplitMultiRoomReservationResponseInstructions)`

SetResponseInstructions sets ResponseInstructions field to given value.

### HasResponseInstructions

`func (o *SplitMultiRoomReservation) HasResponseInstructions() bool`

HasResponseInstructions returns a boolean if a field has been set.

### GetSplitAll

`func (o *SplitMultiRoomReservation) GetSplitAll() bool`

GetSplitAll returns the SplitAll field if non-nil, zero value otherwise.

### GetSplitAllOk

`func (o *SplitMultiRoomReservation) GetSplitAllOk() (*bool, bool)`

GetSplitAllOk returns a tuple with the SplitAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitAll

`func (o *SplitMultiRoomReservation) SetSplitAll(v bool)`

SetSplitAll sets SplitAll field to given value.

### HasSplitAll

`func (o *SplitMultiRoomReservation) HasSplitAll() bool`

HasSplitAll returns a boolean if a field has been set.

### GetWarnings

`func (o *SplitMultiRoomReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SplitMultiRoomReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SplitMultiRoomReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SplitMultiRoomReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

