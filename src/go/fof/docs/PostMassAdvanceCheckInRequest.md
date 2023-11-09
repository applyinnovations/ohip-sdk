# PostMassAdvanceCheckInRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**MassAdvanceCheckInCriteriaType**](MassAdvanceCheckInCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostMassAdvanceCheckInRequest

`func NewPostMassAdvanceCheckInRequest() *PostMassAdvanceCheckInRequest`

NewPostMassAdvanceCheckInRequest instantiates a new PostMassAdvanceCheckInRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMassAdvanceCheckInRequestWithDefaults

`func NewPostMassAdvanceCheckInRequestWithDefaults() *PostMassAdvanceCheckInRequest`

NewPostMassAdvanceCheckInRequestWithDefaults instantiates a new PostMassAdvanceCheckInRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostMassAdvanceCheckInRequest) GetCriteria() MassAdvanceCheckInCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostMassAdvanceCheckInRequest) GetCriteriaOk() (*MassAdvanceCheckInCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostMassAdvanceCheckInRequest) SetCriteria(v MassAdvanceCheckInCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostMassAdvanceCheckInRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *PostMassAdvanceCheckInRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMassAdvanceCheckInRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMassAdvanceCheckInRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMassAdvanceCheckInRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMassAdvanceCheckInRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMassAdvanceCheckInRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMassAdvanceCheckInRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMassAdvanceCheckInRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


