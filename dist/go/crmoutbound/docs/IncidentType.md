# IncidentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | If specified Incident belongs to the Hotel listed, otherwise it is a global Incident. | [optional] 
**IncidentCode** | Pointer to **string** | Code for the Incident. | [optional] 
**Description** | Pointer to **string** | Incident Description for display purposes. | [optional] 
**IncidentOn** | Pointer to **string** | Date and Time the Incident was raised. | [optional] 
**Status** | Pointer to **string** | Status of the Incident. | [optional] 
**Priority** | Pointer to **string** | Incident Priority. | [optional] 
**Source** | Pointer to **string** | Source of the incident. | [optional] 
**Note** | Pointer to **string** | Holds Note for the Incident. | [optional] 

## Methods

### NewIncidentType

`func NewIncidentType() *IncidentType`

NewIncidentType instantiates a new IncidentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIncidentTypeWithDefaults

`func NewIncidentTypeWithDefaults() *IncidentType`

NewIncidentTypeWithDefaults instantiates a new IncidentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *IncidentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *IncidentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *IncidentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *IncidentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncidentCode

`func (o *IncidentType) GetIncidentCode() string`

GetIncidentCode returns the IncidentCode field if non-nil, zero value otherwise.

### GetIncidentCodeOk

`func (o *IncidentType) GetIncidentCodeOk() (*string, bool)`

GetIncidentCodeOk returns a tuple with the IncidentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentCode

`func (o *IncidentType) SetIncidentCode(v string)`

SetIncidentCode sets IncidentCode field to given value.

### HasIncidentCode

`func (o *IncidentType) HasIncidentCode() bool`

HasIncidentCode returns a boolean if a field has been set.

### GetDescription

`func (o *IncidentType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IncidentType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IncidentType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IncidentType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIncidentOn

`func (o *IncidentType) GetIncidentOn() string`

GetIncidentOn returns the IncidentOn field if non-nil, zero value otherwise.

### GetIncidentOnOk

`func (o *IncidentType) GetIncidentOnOk() (*string, bool)`

GetIncidentOnOk returns a tuple with the IncidentOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentOn

`func (o *IncidentType) SetIncidentOn(v string)`

SetIncidentOn sets IncidentOn field to given value.

### HasIncidentOn

`func (o *IncidentType) HasIncidentOn() bool`

HasIncidentOn returns a boolean if a field has been set.

### GetStatus

`func (o *IncidentType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IncidentType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IncidentType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IncidentType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPriority

`func (o *IncidentType) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *IncidentType) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *IncidentType) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *IncidentType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetSource

`func (o *IncidentType) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *IncidentType) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *IncidentType) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *IncidentType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetNote

`func (o *IncidentType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *IncidentType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *IncidentType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *IncidentType) HasNote() bool`

HasNote returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


