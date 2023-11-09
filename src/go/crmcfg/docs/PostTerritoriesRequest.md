# PostTerritoriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Territories** | Pointer to [**TerritoriesType**](TerritoriesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostTerritoriesRequest

`func NewPostTerritoriesRequest() *PostTerritoriesRequest`

NewPostTerritoriesRequest instantiates a new PostTerritoriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTerritoriesRequestWithDefaults

`func NewPostTerritoriesRequestWithDefaults() *PostTerritoriesRequest`

NewPostTerritoriesRequestWithDefaults instantiates a new PostTerritoriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTerritoriesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTerritoriesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTerritoriesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTerritoriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTerritories

`func (o *PostTerritoriesRequest) GetTerritories() TerritoriesType`

GetTerritories returns the Territories field if non-nil, zero value otherwise.

### GetTerritoriesOk

`func (o *PostTerritoriesRequest) GetTerritoriesOk() (*TerritoriesType, bool)`

GetTerritoriesOk returns a tuple with the Territories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerritories

`func (o *PostTerritoriesRequest) SetTerritories(v TerritoriesType)`

SetTerritories sets Territories field to given value.

### HasTerritories

`func (o *PostTerritoriesRequest) HasTerritories() bool`

HasTerritories returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTerritoriesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTerritoriesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTerritoriesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTerritoriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


