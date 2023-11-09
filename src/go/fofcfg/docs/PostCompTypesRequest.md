# PostCompTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompTypes** | Pointer to [**CompTypesType**](CompTypesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCompTypesRequest

`func NewPostCompTypesRequest() *PostCompTypesRequest`

NewPostCompTypesRequest instantiates a new PostCompTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCompTypesRequestWithDefaults

`func NewPostCompTypesRequestWithDefaults() *PostCompTypesRequest`

NewPostCompTypesRequestWithDefaults instantiates a new PostCompTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompTypes

`func (o *PostCompTypesRequest) GetCompTypes() CompTypesType`

GetCompTypes returns the CompTypes field if non-nil, zero value otherwise.

### GetCompTypesOk

`func (o *PostCompTypesRequest) GetCompTypesOk() (*CompTypesType, bool)`

GetCompTypesOk returns a tuple with the CompTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompTypes

`func (o *PostCompTypesRequest) SetCompTypes(v CompTypesType)`

SetCompTypes sets CompTypes field to given value.

### HasCompTypes

`func (o *PostCompTypesRequest) HasCompTypes() bool`

HasCompTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostCompTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCompTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCompTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCompTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCompTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCompTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCompTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCompTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


