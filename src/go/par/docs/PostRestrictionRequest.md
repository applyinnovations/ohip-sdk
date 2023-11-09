# PostRestrictionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Restriction** | Pointer to [**CreateRestrictionType**](CreateRestrictionType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRestrictionRequest

`func NewPostRestrictionRequest() *PostRestrictionRequest`

NewPostRestrictionRequest instantiates a new PostRestrictionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRestrictionRequestWithDefaults

`func NewPostRestrictionRequestWithDefaults() *PostRestrictionRequest`

NewPostRestrictionRequestWithDefaults instantiates a new PostRestrictionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRestrictionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRestrictionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRestrictionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRestrictionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRestriction

`func (o *PostRestrictionRequest) GetRestriction() CreateRestrictionType`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *PostRestrictionRequest) GetRestrictionOk() (*CreateRestrictionType, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *PostRestrictionRequest) SetRestriction(v CreateRestrictionType)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *PostRestrictionRequest) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRestrictionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRestrictionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRestrictionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRestrictionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


