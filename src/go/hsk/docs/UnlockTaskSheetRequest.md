# UnlockTaskSheetRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**TaskSheetLockCriteriaType**](TaskSheetLockCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewUnlockTaskSheetRequest

`func NewUnlockTaskSheetRequest() *UnlockTaskSheetRequest`

NewUnlockTaskSheetRequest instantiates a new UnlockTaskSheetRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnlockTaskSheetRequestWithDefaults

`func NewUnlockTaskSheetRequestWithDefaults() *UnlockTaskSheetRequest`

NewUnlockTaskSheetRequestWithDefaults instantiates a new UnlockTaskSheetRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *UnlockTaskSheetRequest) GetCriteria() TaskSheetLockCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *UnlockTaskSheetRequest) GetCriteriaOk() (*TaskSheetLockCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *UnlockTaskSheetRequest) SetCriteria(v TaskSheetLockCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *UnlockTaskSheetRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *UnlockTaskSheetRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UnlockTaskSheetRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UnlockTaskSheetRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UnlockTaskSheetRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UnlockTaskSheetRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UnlockTaskSheetRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UnlockTaskSheetRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UnlockTaskSheetRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


