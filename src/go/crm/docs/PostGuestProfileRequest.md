# PostGuestProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalReferences** | Pointer to [**ExternalReferencesType**](ExternalReferencesType.md) |  | [optional] 
**GuestDetails** | Pointer to [**GuestProfileType**](GuestProfileType.md) |  | [optional] 
**GuestIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostGuestProfileRequest

`func NewPostGuestProfileRequest() *PostGuestProfileRequest`

NewPostGuestProfileRequest instantiates a new PostGuestProfileRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostGuestProfileRequestWithDefaults

`func NewPostGuestProfileRequestWithDefaults() *PostGuestProfileRequest`

NewPostGuestProfileRequestWithDefaults instantiates a new PostGuestProfileRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalReferences

`func (o *PostGuestProfileRequest) GetExternalReferences() ExternalReferencesType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *PostGuestProfileRequest) GetExternalReferencesOk() (*ExternalReferencesType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *PostGuestProfileRequest) SetExternalReferences(v ExternalReferencesType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *PostGuestProfileRequest) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetGuestDetails

`func (o *PostGuestProfileRequest) GetGuestDetails() GuestProfileType`

GetGuestDetails returns the GuestDetails field if non-nil, zero value otherwise.

### GetGuestDetailsOk

`func (o *PostGuestProfileRequest) GetGuestDetailsOk() (*GuestProfileType, bool)`

GetGuestDetailsOk returns a tuple with the GuestDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDetails

`func (o *PostGuestProfileRequest) SetGuestDetails(v GuestProfileType)`

SetGuestDetails sets GuestDetails field to given value.

### HasGuestDetails

`func (o *PostGuestProfileRequest) HasGuestDetails() bool`

HasGuestDetails returns a boolean if a field has been set.

### GetGuestIdList

`func (o *PostGuestProfileRequest) GetGuestIdList() ProfileIdList`

GetGuestIdList returns the GuestIdList field if non-nil, zero value otherwise.

### GetGuestIdListOk

`func (o *PostGuestProfileRequest) GetGuestIdListOk() (*ProfileIdList, bool)`

GetGuestIdListOk returns a tuple with the GuestIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestIdList

`func (o *PostGuestProfileRequest) SetGuestIdList(v ProfileIdList)`

SetGuestIdList sets GuestIdList field to given value.

### HasGuestIdList

`func (o *PostGuestProfileRequest) HasGuestIdList() bool`

HasGuestIdList returns a boolean if a field has been set.

### GetLinks

`func (o *PostGuestProfileRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostGuestProfileRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostGuestProfileRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostGuestProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostGuestProfileRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostGuestProfileRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostGuestProfileRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostGuestProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


