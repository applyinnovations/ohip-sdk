# CancelReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelInformation** | Pointer to [**ChannelResvRQInfoType**](ChannelResvRQInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateChangeInstruction** | Pointer to [**RateChangeInstructionType**](RateChangeInstructionType.md) |  | [optional] 
**Reason** | Pointer to [**CancellationReasonType**](CancellationReasonType.md) |  | [optional] 
**Reservations** | Pointer to [**[]CancelReservationType**](CancelReservationType.md) | Information on the reservation that is to be canceled. | [optional] 
**VerificationOnly** | Pointer to **bool** | Indicator if the request is a verification on whether the reservation can be canceled. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCancelReservation

`func NewCancelReservation() *CancelReservation`

NewCancelReservation instantiates a new CancelReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelReservationWithDefaults

`func NewCancelReservationWithDefaults() *CancelReservation`

NewCancelReservationWithDefaults instantiates a new CancelReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelInformation

`func (o *CancelReservation) GetChannelInformation() ChannelResvRQInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *CancelReservation) GetChannelInformationOk() (*ChannelResvRQInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *CancelReservation) SetChannelInformation(v ChannelResvRQInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *CancelReservation) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetLinks

`func (o *CancelReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CancelReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CancelReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CancelReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateChangeInstruction

`func (o *CancelReservation) GetRateChangeInstruction() RateChangeInstructionType`

GetRateChangeInstruction returns the RateChangeInstruction field if non-nil, zero value otherwise.

### GetRateChangeInstructionOk

`func (o *CancelReservation) GetRateChangeInstructionOk() (*RateChangeInstructionType, bool)`

GetRateChangeInstructionOk returns a tuple with the RateChangeInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChangeInstruction

`func (o *CancelReservation) SetRateChangeInstruction(v RateChangeInstructionType)`

SetRateChangeInstruction sets RateChangeInstruction field to given value.

### HasRateChangeInstruction

`func (o *CancelReservation) HasRateChangeInstruction() bool`

HasRateChangeInstruction returns a boolean if a field has been set.

### GetReason

`func (o *CancelReservation) GetReason() CancellationReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *CancelReservation) GetReasonOk() (*CancellationReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *CancelReservation) SetReason(v CancellationReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *CancelReservation) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetReservations

`func (o *CancelReservation) GetReservations() []CancelReservationType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *CancelReservation) GetReservationsOk() (*[]CancelReservationType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *CancelReservation) SetReservations(v []CancelReservationType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *CancelReservation) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetVerificationOnly

`func (o *CancelReservation) GetVerificationOnly() bool`

GetVerificationOnly returns the VerificationOnly field if non-nil, zero value otherwise.

### GetVerificationOnlyOk

`func (o *CancelReservation) GetVerificationOnlyOk() (*bool, bool)`

GetVerificationOnlyOk returns a tuple with the VerificationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationOnly

`func (o *CancelReservation) SetVerificationOnly(v bool)`

SetVerificationOnly sets VerificationOnly field to given value.

### HasVerificationOnly

`func (o *CancelReservation) HasVerificationOnly() bool`

HasVerificationOnly returns a boolean if a field has been set.

### GetWarnings

`func (o *CancelReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CancelReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CancelReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CancelReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


