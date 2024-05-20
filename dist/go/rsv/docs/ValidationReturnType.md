# ValidationReturnType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InvalidReservations** | Pointer to [**[]ReservationSummaryType**](ReservationSummaryType.md) | List of Reservations. | [optional] 
**ValidationAction** | Pointer to [**ValidationActionType**](ValidationActionType.md) |  | [optional] 
**ValidationCode** | Pointer to **string** | The code returned after validation. | [optional] 
**ValidationMessage** | Pointer to **string** | The message returned after validating. | [optional] 
**ValidationType** | Pointer to **string** | The type of Validation Record. Example would be OVERBOOK_INVENTORY, OVERRIDE_MAX_OCCUPANCY, CREDIT_CARD_REQUIRED In some cases this will match a permission. | [optional] 

## Methods

### NewValidationReturnType

`func NewValidationReturnType() *ValidationReturnType`

NewValidationReturnType instantiates a new ValidationReturnType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidationReturnTypeWithDefaults

`func NewValidationReturnTypeWithDefaults() *ValidationReturnType`

NewValidationReturnTypeWithDefaults instantiates a new ValidationReturnType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvalidReservations

`func (o *ValidationReturnType) GetInvalidReservations() []ReservationSummaryType`

GetInvalidReservations returns the InvalidReservations field if non-nil, zero value otherwise.

### GetInvalidReservationsOk

`func (o *ValidationReturnType) GetInvalidReservationsOk() (*[]ReservationSummaryType, bool)`

GetInvalidReservationsOk returns a tuple with the InvalidReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvalidReservations

`func (o *ValidationReturnType) SetInvalidReservations(v []ReservationSummaryType)`

SetInvalidReservations sets InvalidReservations field to given value.

### HasInvalidReservations

`func (o *ValidationReturnType) HasInvalidReservations() bool`

HasInvalidReservations returns a boolean if a field has been set.

### GetValidationAction

`func (o *ValidationReturnType) GetValidationAction() ValidationActionType`

GetValidationAction returns the ValidationAction field if non-nil, zero value otherwise.

### GetValidationActionOk

`func (o *ValidationReturnType) GetValidationActionOk() (*ValidationActionType, bool)`

GetValidationActionOk returns a tuple with the ValidationAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationAction

`func (o *ValidationReturnType) SetValidationAction(v ValidationActionType)`

SetValidationAction sets ValidationAction field to given value.

### HasValidationAction

`func (o *ValidationReturnType) HasValidationAction() bool`

HasValidationAction returns a boolean if a field has been set.

### GetValidationCode

`func (o *ValidationReturnType) GetValidationCode() string`

GetValidationCode returns the ValidationCode field if non-nil, zero value otherwise.

### GetValidationCodeOk

`func (o *ValidationReturnType) GetValidationCodeOk() (*string, bool)`

GetValidationCodeOk returns a tuple with the ValidationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationCode

`func (o *ValidationReturnType) SetValidationCode(v string)`

SetValidationCode sets ValidationCode field to given value.

### HasValidationCode

`func (o *ValidationReturnType) HasValidationCode() bool`

HasValidationCode returns a boolean if a field has been set.

### GetValidationMessage

`func (o *ValidationReturnType) GetValidationMessage() string`

GetValidationMessage returns the ValidationMessage field if non-nil, zero value otherwise.

### GetValidationMessageOk

`func (o *ValidationReturnType) GetValidationMessageOk() (*string, bool)`

GetValidationMessageOk returns a tuple with the ValidationMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationMessage

`func (o *ValidationReturnType) SetValidationMessage(v string)`

SetValidationMessage sets ValidationMessage field to given value.

### HasValidationMessage

`func (o *ValidationReturnType) HasValidationMessage() bool`

HasValidationMessage returns a boolean if a field has been set.

### GetValidationType

`func (o *ValidationReturnType) GetValidationType() string`

GetValidationType returns the ValidationType field if non-nil, zero value otherwise.

### GetValidationTypeOk

`func (o *ValidationReturnType) GetValidationTypeOk() (*string, bool)`

GetValidationTypeOk returns a tuple with the ValidationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationType

`func (o *ValidationReturnType) SetValidationType(v string)`

SetValidationType sets ValidationType field to given value.

### HasValidationType

`func (o *ValidationReturnType) HasValidationType() bool`

HasValidationType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


