# ValidateReservationsForProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**HasFuturePastBookingsSearchType**](HasFuturePastBookingsSearchType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewValidateReservationsForProfileRequest

`func NewValidateReservationsForProfileRequest() *ValidateReservationsForProfileRequest`

NewValidateReservationsForProfileRequest instantiates a new ValidateReservationsForProfileRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateReservationsForProfileRequestWithDefaults

`func NewValidateReservationsForProfileRequestWithDefaults() *ValidateReservationsForProfileRequest`

NewValidateReservationsForProfileRequestWithDefaults instantiates a new ValidateReservationsForProfileRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ValidateReservationsForProfileRequest) GetCriteria() HasFuturePastBookingsSearchType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ValidateReservationsForProfileRequest) GetCriteriaOk() (*HasFuturePastBookingsSearchType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ValidateReservationsForProfileRequest) SetCriteria(v HasFuturePastBookingsSearchType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ValidateReservationsForProfileRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ValidateReservationsForProfileRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidateReservationsForProfileRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidateReservationsForProfileRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidateReservationsForProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidateReservationsForProfileRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidateReservationsForProfileRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidateReservationsForProfileRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidateReservationsForProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


