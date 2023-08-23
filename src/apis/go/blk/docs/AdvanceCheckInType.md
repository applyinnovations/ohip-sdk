# AdvanceCheckInType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdvanceCheckedIn** | Pointer to **bool** | Indicates if the reservation is marked as Advance Checked In | [optional] 
**ExpectedReturnTime** | Pointer to **time.Time** | Expected Return Time | [optional] 
**ETRComments** | Pointer to **string** | ETR Comments | [optional] 

## Methods

### NewAdvanceCheckInType

`func NewAdvanceCheckInType() *AdvanceCheckInType`

NewAdvanceCheckInType instantiates a new AdvanceCheckInType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvanceCheckInTypeWithDefaults

`func NewAdvanceCheckInTypeWithDefaults() *AdvanceCheckInType`

NewAdvanceCheckInTypeWithDefaults instantiates a new AdvanceCheckInType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdvanceCheckedIn

`func (o *AdvanceCheckInType) GetAdvanceCheckedIn() bool`

GetAdvanceCheckedIn returns the AdvanceCheckedIn field if non-nil, zero value otherwise.

### GetAdvanceCheckedInOk

`func (o *AdvanceCheckInType) GetAdvanceCheckedInOk() (*bool, bool)`

GetAdvanceCheckedInOk returns a tuple with the AdvanceCheckedIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckedIn

`func (o *AdvanceCheckInType) SetAdvanceCheckedIn(v bool)`

SetAdvanceCheckedIn sets AdvanceCheckedIn field to given value.

### HasAdvanceCheckedIn

`func (o *AdvanceCheckInType) HasAdvanceCheckedIn() bool`

HasAdvanceCheckedIn returns a boolean if a field has been set.

### GetExpectedReturnTime

`func (o *AdvanceCheckInType) GetExpectedReturnTime() time.Time`

GetExpectedReturnTime returns the ExpectedReturnTime field if non-nil, zero value otherwise.

### GetExpectedReturnTimeOk

`func (o *AdvanceCheckInType) GetExpectedReturnTimeOk() (*time.Time, bool)`

GetExpectedReturnTimeOk returns a tuple with the ExpectedReturnTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedReturnTime

`func (o *AdvanceCheckInType) SetExpectedReturnTime(v time.Time)`

SetExpectedReturnTime sets ExpectedReturnTime field to given value.

### HasExpectedReturnTime

`func (o *AdvanceCheckInType) HasExpectedReturnTime() bool`

HasExpectedReturnTime returns a boolean if a field has been set.

### GetETRComments

`func (o *AdvanceCheckInType) GetETRComments() string`

GetETRComments returns the ETRComments field if non-nil, zero value otherwise.

### GetETRCommentsOk

`func (o *AdvanceCheckInType) GetETRCommentsOk() (*string, bool)`

GetETRCommentsOk returns a tuple with the ETRComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetETRComments

`func (o *AdvanceCheckInType) SetETRComments(v string)`

SetETRComments sets ETRComments field to given value.

### HasETRComments

`func (o *AdvanceCheckInType) HasETRComments() bool`

HasETRComments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


