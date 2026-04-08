# ProfileAdditionalInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryOwnerCode** | Pointer to **string** | Primary Owner of the profile | [optional] 
**Territory** | Pointer to **string** | Territory associated to the profile. | [optional] 
**MasterAccount** | Pointer to **bool** | Indicates if the profile is a Master Account for one or more Subsidiary Accounts. | [optional] 
**SubsidiaryAccount** | Pointer to **bool** | Indicates if the profile is a Subsidiary Account of a Master/Parent Account. | [optional] 
**BusinessPosition** | Pointer to **string** | Business Title or Position of the profile. | [optional] 

## Methods

### NewProfileAdditionalInfoType

`func NewProfileAdditionalInfoType() *ProfileAdditionalInfoType`

NewProfileAdditionalInfoType instantiates a new ProfileAdditionalInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileAdditionalInfoTypeWithDefaults

`func NewProfileAdditionalInfoTypeWithDefaults() *ProfileAdditionalInfoType`

NewProfileAdditionalInfoTypeWithDefaults instantiates a new ProfileAdditionalInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryOwnerCode

`func (o *ProfileAdditionalInfoType) GetPrimaryOwnerCode() string`

GetPrimaryOwnerCode returns the PrimaryOwnerCode field if non-nil, zero value otherwise.

### GetPrimaryOwnerCodeOk

`func (o *ProfileAdditionalInfoType) GetPrimaryOwnerCodeOk() (*string, bool)`

GetPrimaryOwnerCodeOk returns a tuple with the PrimaryOwnerCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryOwnerCode

`func (o *ProfileAdditionalInfoType) SetPrimaryOwnerCode(v string)`

SetPrimaryOwnerCode sets PrimaryOwnerCode field to given value.

### HasPrimaryOwnerCode

`func (o *ProfileAdditionalInfoType) HasPrimaryOwnerCode() bool`

HasPrimaryOwnerCode returns a boolean if a field has been set.

### GetTerritory

`func (o *ProfileAdditionalInfoType) GetTerritory() string`

GetTerritory returns the Territory field if non-nil, zero value otherwise.

### GetTerritoryOk

`func (o *ProfileAdditionalInfoType) GetTerritoryOk() (*string, bool)`

GetTerritoryOk returns a tuple with the Territory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerritory

`func (o *ProfileAdditionalInfoType) SetTerritory(v string)`

SetTerritory sets Territory field to given value.

### HasTerritory

`func (o *ProfileAdditionalInfoType) HasTerritory() bool`

HasTerritory returns a boolean if a field has been set.

### GetMasterAccount

`func (o *ProfileAdditionalInfoType) GetMasterAccount() bool`

GetMasterAccount returns the MasterAccount field if non-nil, zero value otherwise.

### GetMasterAccountOk

`func (o *ProfileAdditionalInfoType) GetMasterAccountOk() (*bool, bool)`

GetMasterAccountOk returns a tuple with the MasterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterAccount

`func (o *ProfileAdditionalInfoType) SetMasterAccount(v bool)`

SetMasterAccount sets MasterAccount field to given value.

### HasMasterAccount

`func (o *ProfileAdditionalInfoType) HasMasterAccount() bool`

HasMasterAccount returns a boolean if a field has been set.

### GetSubsidiaryAccount

`func (o *ProfileAdditionalInfoType) GetSubsidiaryAccount() bool`

GetSubsidiaryAccount returns the SubsidiaryAccount field if non-nil, zero value otherwise.

### GetSubsidiaryAccountOk

`func (o *ProfileAdditionalInfoType) GetSubsidiaryAccountOk() (*bool, bool)`

GetSubsidiaryAccountOk returns a tuple with the SubsidiaryAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsidiaryAccount

`func (o *ProfileAdditionalInfoType) SetSubsidiaryAccount(v bool)`

SetSubsidiaryAccount sets SubsidiaryAccount field to given value.

### HasSubsidiaryAccount

`func (o *ProfileAdditionalInfoType) HasSubsidiaryAccount() bool`

HasSubsidiaryAccount returns a boolean if a field has been set.

### GetBusinessPosition

`func (o *ProfileAdditionalInfoType) GetBusinessPosition() string`

GetBusinessPosition returns the BusinessPosition field if non-nil, zero value otherwise.

### GetBusinessPositionOk

`func (o *ProfileAdditionalInfoType) GetBusinessPositionOk() (*string, bool)`

GetBusinessPositionOk returns a tuple with the BusinessPosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessPosition

`func (o *ProfileAdditionalInfoType) SetBusinessPosition(v string)`

SetBusinessPosition sets BusinessPosition field to given value.

### HasBusinessPosition

`func (o *ProfileAdditionalInfoType) HasBusinessPosition() bool`

HasBusinessPosition returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


