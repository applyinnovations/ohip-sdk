# Restrictions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Restrictions** | Pointer to [**[]CreateRestrictionType**](CreateRestrictionType.md) | Collection of restrictions to be configured. | [optional] 

## Methods

### NewRestrictions

`func NewRestrictions() *Restrictions`

NewRestrictions instantiates a new Restrictions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionsWithDefaults

`func NewRestrictionsWithDefaults() *Restrictions`

NewRestrictionsWithDefaults instantiates a new Restrictions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *Restrictions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Restrictions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Restrictions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Restrictions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRestrictions

`func (o *Restrictions) GetRestrictions() []CreateRestrictionType`

GetRestrictions returns the Restrictions field if non-nil, zero value otherwise.

### GetRestrictionsOk

`func (o *Restrictions) GetRestrictionsOk() (*[]CreateRestrictionType, bool)`

GetRestrictionsOk returns a tuple with the Restrictions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictions

`func (o *Restrictions) SetRestrictions(v []CreateRestrictionType)`

SetRestrictions sets Restrictions field to given value.

### HasRestrictions

`func (o *Restrictions) HasRestrictions() bool`

HasRestrictions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


