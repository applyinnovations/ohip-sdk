# PostStatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**States** | Pointer to [**StatesType**](StatesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostStatesRequest

`func NewPostStatesRequest() *PostStatesRequest`

NewPostStatesRequest instantiates a new PostStatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostStatesRequestWithDefaults

`func NewPostStatesRequestWithDefaults() *PostStatesRequest`

NewPostStatesRequestWithDefaults instantiates a new PostStatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostStatesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostStatesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostStatesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostStatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetStates

`func (o *PostStatesRequest) GetStates() StatesType`

GetStates returns the States field if non-nil, zero value otherwise.

### GetStatesOk

`func (o *PostStatesRequest) GetStatesOk() (*StatesType, bool)`

GetStatesOk returns a tuple with the States field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStates

`func (o *PostStatesRequest) SetStates(v StatesType)`

SetStates sets States field to given value.

### HasStates

`func (o *PostStatesRequest) HasStates() bool`

HasStates returns a boolean if a field has been set.

### GetWarnings

`func (o *PostStatesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostStatesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostStatesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostStatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


