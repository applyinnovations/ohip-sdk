# PutPreferenceGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PreferenceGroups** | Pointer to [**PreferenceGroupsType**](PreferenceGroupsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutPreferenceGroupsRequest

`func NewPutPreferenceGroupsRequest() *PutPreferenceGroupsRequest`

NewPutPreferenceGroupsRequest instantiates a new PutPreferenceGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutPreferenceGroupsRequestWithDefaults

`func NewPutPreferenceGroupsRequestWithDefaults() *PutPreferenceGroupsRequest`

NewPutPreferenceGroupsRequestWithDefaults instantiates a new PutPreferenceGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutPreferenceGroupsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutPreferenceGroupsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutPreferenceGroupsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutPreferenceGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPreferenceGroups

`func (o *PutPreferenceGroupsRequest) GetPreferenceGroups() PreferenceGroupsType`

GetPreferenceGroups returns the PreferenceGroups field if non-nil, zero value otherwise.

### GetPreferenceGroupsOk

`func (o *PutPreferenceGroupsRequest) GetPreferenceGroupsOk() (*PreferenceGroupsType, bool)`

GetPreferenceGroupsOk returns a tuple with the PreferenceGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceGroups

`func (o *PutPreferenceGroupsRequest) SetPreferenceGroups(v PreferenceGroupsType)`

SetPreferenceGroups sets PreferenceGroups field to given value.

### HasPreferenceGroups

`func (o *PutPreferenceGroupsRequest) HasPreferenceGroups() bool`

HasPreferenceGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PutPreferenceGroupsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutPreferenceGroupsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutPreferenceGroupsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutPreferenceGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


