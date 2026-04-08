# PostCancelReservationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateChangeInstruction** | Pointer to [**RateChangeInstructionType**](RateChangeInstructionType.md) |  | [optional] 
**Reason** | Pointer to [**CancellationReasonType**](CancellationReasonType.md) |  | [optional] 
**Reservations** | Pointer to [**[]CancelReservationType**](CancelReservationType.md) | Information on the reservation that is to be canceled. | [optional] 
**ChannelInformation** | Pointer to [**ChannelResvRQInfoType**](ChannelResvRQInfoType.md) |  | [optional] 
**ReservationNotification** | Pointer to **bool** | Boolean flag that forces reservation to updates in OPERA. By default, this value is false. | [optional] [default to false]
**VerificationOnly** | Pointer to **bool** | Indicator if the request is a verification on whether the reservation can be canceled. | [optional] 
**Comments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCancelReservationRequest

`func NewPostCancelReservationRequest() *PostCancelReservationRequest`

NewPostCancelReservationRequest instantiates a new PostCancelReservationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCancelReservationRequestWithDefaults

`func NewPostCancelReservationRequestWithDefaults() *PostCancelReservationRequest`

NewPostCancelReservationRequestWithDefaults instantiates a new PostCancelReservationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateChangeInstruction

`func (o *PostCancelReservationRequest) GetRateChangeInstruction() RateChangeInstructionType`

GetRateChangeInstruction returns the RateChangeInstruction field if non-nil, zero value otherwise.

### GetRateChangeInstructionOk

`func (o *PostCancelReservationRequest) GetRateChangeInstructionOk() (*RateChangeInstructionType, bool)`

GetRateChangeInstructionOk returns a tuple with the RateChangeInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChangeInstruction

`func (o *PostCancelReservationRequest) SetRateChangeInstruction(v RateChangeInstructionType)`

SetRateChangeInstruction sets RateChangeInstruction field to given value.

### HasRateChangeInstruction

`func (o *PostCancelReservationRequest) HasRateChangeInstruction() bool`

HasRateChangeInstruction returns a boolean if a field has been set.

### GetReason

`func (o *PostCancelReservationRequest) GetReason() CancellationReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *PostCancelReservationRequest) GetReasonOk() (*CancellationReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *PostCancelReservationRequest) SetReason(v CancellationReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *PostCancelReservationRequest) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetReservations

`func (o *PostCancelReservationRequest) GetReservations() []CancelReservationType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *PostCancelReservationRequest) GetReservationsOk() (*[]CancelReservationType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *PostCancelReservationRequest) SetReservations(v []CancelReservationType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *PostCancelReservationRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetChannelInformation

`func (o *PostCancelReservationRequest) GetChannelInformation() ChannelResvRQInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *PostCancelReservationRequest) GetChannelInformationOk() (*ChannelResvRQInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *PostCancelReservationRequest) SetChannelInformation(v ChannelResvRQInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *PostCancelReservationRequest) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetReservationNotification

`func (o *PostCancelReservationRequest) GetReservationNotification() bool`

GetReservationNotification returns the ReservationNotification field if non-nil, zero value otherwise.

### GetReservationNotificationOk

`func (o *PostCancelReservationRequest) GetReservationNotificationOk() (*bool, bool)`

GetReservationNotificationOk returns a tuple with the ReservationNotification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNotification

`func (o *PostCancelReservationRequest) SetReservationNotification(v bool)`

SetReservationNotification sets ReservationNotification field to given value.

### HasReservationNotification

`func (o *PostCancelReservationRequest) HasReservationNotification() bool`

HasReservationNotification returns a boolean if a field has been set.

### GetVerificationOnly

`func (o *PostCancelReservationRequest) GetVerificationOnly() bool`

GetVerificationOnly returns the VerificationOnly field if non-nil, zero value otherwise.

### GetVerificationOnlyOk

`func (o *PostCancelReservationRequest) GetVerificationOnlyOk() (*bool, bool)`

GetVerificationOnlyOk returns a tuple with the VerificationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerificationOnly

`func (o *PostCancelReservationRequest) SetVerificationOnly(v bool)`

SetVerificationOnly sets VerificationOnly field to given value.

### HasVerificationOnly

`func (o *PostCancelReservationRequest) HasVerificationOnly() bool`

HasVerificationOnly returns a boolean if a field has been set.

### GetComments

`func (o *PostCancelReservationRequest) GetComments() []CommentInfoType`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *PostCancelReservationRequest) GetCommentsOk() (*[]CommentInfoType, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *PostCancelReservationRequest) SetComments(v []CommentInfoType)`

SetComments sets Comments field to given value.

### HasComments

`func (o *PostCancelReservationRequest) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetLinks

`func (o *PostCancelReservationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCancelReservationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCancelReservationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCancelReservationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCancelReservationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCancelReservationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCancelReservationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCancelReservationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


