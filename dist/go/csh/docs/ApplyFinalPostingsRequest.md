# ApplyFinalPostingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservation** | Pointer to [**CheckoutReservationType**](CheckoutReservationType.md) |  | [optional] 
**ResponseInstruction** | Pointer to [**ResponseInstructionType**](ResponseInstructionType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewApplyFinalPostingsRequest

`func NewApplyFinalPostingsRequest() *ApplyFinalPostingsRequest`

NewApplyFinalPostingsRequest instantiates a new ApplyFinalPostingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApplyFinalPostingsRequestWithDefaults

`func NewApplyFinalPostingsRequestWithDefaults() *ApplyFinalPostingsRequest`

NewApplyFinalPostingsRequestWithDefaults instantiates a new ApplyFinalPostingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ApplyFinalPostingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ApplyFinalPostingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ApplyFinalPostingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ApplyFinalPostingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservation

`func (o *ApplyFinalPostingsRequest) GetReservation() CheckoutReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *ApplyFinalPostingsRequest) GetReservationOk() (*CheckoutReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *ApplyFinalPostingsRequest) SetReservation(v CheckoutReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *ApplyFinalPostingsRequest) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *ApplyFinalPostingsRequest) GetResponseInstruction() ResponseInstructionType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *ApplyFinalPostingsRequest) GetResponseInstructionOk() (*ResponseInstructionType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *ApplyFinalPostingsRequest) SetResponseInstruction(v ResponseInstructionType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *ApplyFinalPostingsRequest) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetWarnings

`func (o *ApplyFinalPostingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ApplyFinalPostingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ApplyFinalPostingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ApplyFinalPostingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


