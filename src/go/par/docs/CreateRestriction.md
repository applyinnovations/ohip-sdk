# CreateRestriction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Restriction** | Pointer to [**CreateRestrictionType**](CreateRestrictionType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCreateRestriction

`func NewCreateRestriction() *CreateRestriction`

NewCreateRestriction instantiates a new CreateRestriction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRestrictionWithDefaults

`func NewCreateRestrictionWithDefaults() *CreateRestriction`

NewCreateRestrictionWithDefaults instantiates a new CreateRestriction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CreateRestriction) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateRestriction) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateRestriction) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateRestriction) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRestriction

`func (o *CreateRestriction) GetRestriction() CreateRestrictionType`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *CreateRestriction) GetRestrictionOk() (*CreateRestrictionType, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *CreateRestriction) SetRestriction(v CreateRestrictionType)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *CreateRestriction) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateRestriction) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateRestriction) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateRestriction) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateRestriction) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


