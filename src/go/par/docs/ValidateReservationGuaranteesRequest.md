# ValidateReservationGuaranteesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**ResGuaranteeSearchType**](ResGuaranteeSearchType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewValidateReservationGuaranteesRequest

`func NewValidateReservationGuaranteesRequest() *ValidateReservationGuaranteesRequest`

NewValidateReservationGuaranteesRequest instantiates a new ValidateReservationGuaranteesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateReservationGuaranteesRequestWithDefaults

`func NewValidateReservationGuaranteesRequestWithDefaults() *ValidateReservationGuaranteesRequest`

NewValidateReservationGuaranteesRequestWithDefaults instantiates a new ValidateReservationGuaranteesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ValidateReservationGuaranteesRequest) GetCriteria() ResGuaranteeSearchType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ValidateReservationGuaranteesRequest) GetCriteriaOk() (*ResGuaranteeSearchType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ValidateReservationGuaranteesRequest) SetCriteria(v ResGuaranteeSearchType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ValidateReservationGuaranteesRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidateReservationGuaranteesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidateReservationGuaranteesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidateReservationGuaranteesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidateReservationGuaranteesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


