# MergeProfilesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProfileDetails** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**VictimProfileId** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewMergeProfilesRequest

`func NewMergeProfilesRequest() *MergeProfilesRequest`

NewMergeProfilesRequest instantiates a new MergeProfilesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMergeProfilesRequestWithDefaults

`func NewMergeProfilesRequestWithDefaults() *MergeProfilesRequest`

NewMergeProfilesRequestWithDefaults instantiates a new MergeProfilesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MergeProfilesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MergeProfilesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MergeProfilesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MergeProfilesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileDetails

`func (o *MergeProfilesRequest) GetProfileDetails() ProfileType`

GetProfileDetails returns the ProfileDetails field if non-nil, zero value otherwise.

### GetProfileDetailsOk

`func (o *MergeProfilesRequest) GetProfileDetailsOk() (*ProfileType, bool)`

GetProfileDetailsOk returns a tuple with the ProfileDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDetails

`func (o *MergeProfilesRequest) SetProfileDetails(v ProfileType)`

SetProfileDetails sets ProfileDetails field to given value.

### HasProfileDetails

`func (o *MergeProfilesRequest) HasProfileDetails() bool`

HasProfileDetails returns a boolean if a field has been set.

### GetVictimProfileId

`func (o *MergeProfilesRequest) GetVictimProfileId() UniqueIDListType`

GetVictimProfileId returns the VictimProfileId field if non-nil, zero value otherwise.

### GetVictimProfileIdOk

`func (o *MergeProfilesRequest) GetVictimProfileIdOk() (*UniqueIDListType, bool)`

GetVictimProfileIdOk returns a tuple with the VictimProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVictimProfileId

`func (o *MergeProfilesRequest) SetVictimProfileId(v UniqueIDListType)`

SetVictimProfileId sets VictimProfileId field to given value.

### HasVictimProfileId

`func (o *MergeProfilesRequest) HasVictimProfileId() bool`

HasVictimProfileId returns a boolean if a field has been set.

### GetWarnings

`func (o *MergeProfilesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MergeProfilesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MergeProfilesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MergeProfilesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


