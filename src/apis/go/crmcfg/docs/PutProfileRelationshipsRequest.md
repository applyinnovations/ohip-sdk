# PutProfileRelationshipsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileLinks** | Pointer to [**[]ProfileLinkType**](ProfileLinkType.md) | Holds the collection of profile link objects | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutProfileRelationshipsRequest

`func NewPutProfileRelationshipsRequest() *PutProfileRelationshipsRequest`

NewPutProfileRelationshipsRequest instantiates a new PutProfileRelationshipsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutProfileRelationshipsRequestWithDefaults

`func NewPutProfileRelationshipsRequestWithDefaults() *PutProfileRelationshipsRequest`

NewPutProfileRelationshipsRequestWithDefaults instantiates a new PutProfileRelationshipsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileLinks

`func (o *PutProfileRelationshipsRequest) GetProfileLinks() []ProfileLinkType`

GetProfileLinks returns the ProfileLinks field if non-nil, zero value otherwise.

### GetProfileLinksOk

`func (o *PutProfileRelationshipsRequest) GetProfileLinksOk() (*[]ProfileLinkType, bool)`

GetProfileLinksOk returns a tuple with the ProfileLinks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileLinks

`func (o *PutProfileRelationshipsRequest) SetProfileLinks(v []ProfileLinkType)`

SetProfileLinks sets ProfileLinks field to given value.

### HasProfileLinks

`func (o *PutProfileRelationshipsRequest) HasProfileLinks() bool`

HasProfileLinks returns a boolean if a field has been set.

### GetLinks

`func (o *PutProfileRelationshipsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutProfileRelationshipsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutProfileRelationshipsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutProfileRelationshipsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutProfileRelationshipsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutProfileRelationshipsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutProfileRelationshipsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutProfileRelationshipsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


