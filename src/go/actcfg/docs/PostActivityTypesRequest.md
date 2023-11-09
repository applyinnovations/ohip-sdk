# PostActivityTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityConfigTypes** | Pointer to [**ActivityConfigListType**](ActivityConfigListType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostActivityTypesRequest

`func NewPostActivityTypesRequest() *PostActivityTypesRequest`

NewPostActivityTypesRequest instantiates a new PostActivityTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostActivityTypesRequestWithDefaults

`func NewPostActivityTypesRequestWithDefaults() *PostActivityTypesRequest`

NewPostActivityTypesRequestWithDefaults instantiates a new PostActivityTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityConfigTypes

`func (o *PostActivityTypesRequest) GetActivityConfigTypes() ActivityConfigListType`

GetActivityConfigTypes returns the ActivityConfigTypes field if non-nil, zero value otherwise.

### GetActivityConfigTypesOk

`func (o *PostActivityTypesRequest) GetActivityConfigTypesOk() (*ActivityConfigListType, bool)`

GetActivityConfigTypesOk returns a tuple with the ActivityConfigTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityConfigTypes

`func (o *PostActivityTypesRequest) SetActivityConfigTypes(v ActivityConfigListType)`

SetActivityConfigTypes sets ActivityConfigTypes field to given value.

### HasActivityConfigTypes

`func (o *PostActivityTypesRequest) HasActivityConfigTypes() bool`

HasActivityConfigTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostActivityTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostActivityTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostActivityTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostActivityTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostActivityTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostActivityTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostActivityTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostActivityTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


