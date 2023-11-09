# SetCompAuthorizerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**CompAuthorizerType**](CompAuthorizerType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSetCompAuthorizerRequest

`func NewSetCompAuthorizerRequest() *SetCompAuthorizerRequest`

NewSetCompAuthorizerRequest instantiates a new SetCompAuthorizerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetCompAuthorizerRequestWithDefaults

`func NewSetCompAuthorizerRequestWithDefaults() *SetCompAuthorizerRequest`

NewSetCompAuthorizerRequestWithDefaults instantiates a new SetCompAuthorizerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *SetCompAuthorizerRequest) GetCriteria() CompAuthorizerType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *SetCompAuthorizerRequest) GetCriteriaOk() (*CompAuthorizerType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *SetCompAuthorizerRequest) SetCriteria(v CompAuthorizerType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *SetCompAuthorizerRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *SetCompAuthorizerRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetCompAuthorizerRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetCompAuthorizerRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetCompAuthorizerRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetCompAuthorizerRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetCompAuthorizerRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetCompAuthorizerRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetCompAuthorizerRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


