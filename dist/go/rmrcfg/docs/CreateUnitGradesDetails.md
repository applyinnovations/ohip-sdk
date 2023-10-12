# CreateUnitGradesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UnitGrades** | Pointer to [**[]RoomRotationUnitGradeType**](RoomRotationUnitGradeType.md) | Room Rotation Unit Grade Enumeration element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateUnitGradesDetails

`func NewCreateUnitGradesDetails() *CreateUnitGradesDetails`

NewCreateUnitGradesDetails instantiates a new CreateUnitGradesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateUnitGradesDetailsWithDefaults

`func NewCreateUnitGradesDetailsWithDefaults() *CreateUnitGradesDetails`

NewCreateUnitGradesDetailsWithDefaults instantiates a new CreateUnitGradesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUnitGrades

`func (o *CreateUnitGradesDetails) GetUnitGrades() []RoomRotationUnitGradeType`

GetUnitGrades returns the UnitGrades field if non-nil, zero value otherwise.

### GetUnitGradesOk

`func (o *CreateUnitGradesDetails) GetUnitGradesOk() (*[]RoomRotationUnitGradeType, bool)`

GetUnitGradesOk returns a tuple with the UnitGrades field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitGrades

`func (o *CreateUnitGradesDetails) SetUnitGrades(v []RoomRotationUnitGradeType)`

SetUnitGrades sets UnitGrades field to given value.

### HasUnitGrades

`func (o *CreateUnitGradesDetails) HasUnitGrades() bool`

HasUnitGrades returns a boolean if a field has been set.

### GetLinks

`func (o *CreateUnitGradesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateUnitGradesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateUnitGradesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateUnitGradesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateUnitGradesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateUnitGradesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateUnitGradesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateUnitGradesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


