# ChangeOwnerTeamsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**OwnerTeams** | Pointer to [**OwnerTeamsType**](OwnerTeamsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeOwnerTeamsRequest

`func NewChangeOwnerTeamsRequest() *ChangeOwnerTeamsRequest`

NewChangeOwnerTeamsRequest instantiates a new ChangeOwnerTeamsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeOwnerTeamsRequestWithDefaults

`func NewChangeOwnerTeamsRequestWithDefaults() *ChangeOwnerTeamsRequest`

NewChangeOwnerTeamsRequestWithDefaults instantiates a new ChangeOwnerTeamsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeOwnerTeamsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeOwnerTeamsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeOwnerTeamsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeOwnerTeamsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOwnerTeams

`func (o *ChangeOwnerTeamsRequest) GetOwnerTeams() OwnerTeamsType`

GetOwnerTeams returns the OwnerTeams field if non-nil, zero value otherwise.

### GetOwnerTeamsOk

`func (o *ChangeOwnerTeamsRequest) GetOwnerTeamsOk() (*OwnerTeamsType, bool)`

GetOwnerTeamsOk returns a tuple with the OwnerTeams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerTeams

`func (o *ChangeOwnerTeamsRequest) SetOwnerTeams(v OwnerTeamsType)`

SetOwnerTeams sets OwnerTeams field to given value.

### HasOwnerTeams

`func (o *ChangeOwnerTeamsRequest) HasOwnerTeams() bool`

HasOwnerTeams returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeOwnerTeamsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeOwnerTeamsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeOwnerTeamsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeOwnerTeamsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


