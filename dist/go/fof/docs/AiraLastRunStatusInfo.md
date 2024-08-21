# AiraLastRunStatusInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionValue** | Pointer to **string** | Actual run status of an AI room assignment | [optional] 
**InsertDate** | Pointer to **string** | When the AI Room Assignment starts execution | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UpdateDate** | Pointer to **string** | Date time of updated status of an executions | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAiraLastRunStatusInfo

`func NewAiraLastRunStatusInfo() *AiraLastRunStatusInfo`

NewAiraLastRunStatusInfo instantiates a new AiraLastRunStatusInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAiraLastRunStatusInfoWithDefaults

`func NewAiraLastRunStatusInfoWithDefaults() *AiraLastRunStatusInfo`

NewAiraLastRunStatusInfoWithDefaults instantiates a new AiraLastRunStatusInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionValue

`func (o *AiraLastRunStatusInfo) GetActionValue() string`

GetActionValue returns the ActionValue field if non-nil, zero value otherwise.

### GetActionValueOk

`func (o *AiraLastRunStatusInfo) GetActionValueOk() (*string, bool)`

GetActionValueOk returns a tuple with the ActionValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionValue

`func (o *AiraLastRunStatusInfo) SetActionValue(v string)`

SetActionValue sets ActionValue field to given value.

### HasActionValue

`func (o *AiraLastRunStatusInfo) HasActionValue() bool`

HasActionValue returns a boolean if a field has been set.

### GetInsertDate

`func (o *AiraLastRunStatusInfo) GetInsertDate() string`

GetInsertDate returns the InsertDate field if non-nil, zero value otherwise.

### GetInsertDateOk

`func (o *AiraLastRunStatusInfo) GetInsertDateOk() (*string, bool)`

GetInsertDateOk returns a tuple with the InsertDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsertDate

`func (o *AiraLastRunStatusInfo) SetInsertDate(v string)`

SetInsertDate sets InsertDate field to given value.

### HasInsertDate

`func (o *AiraLastRunStatusInfo) HasInsertDate() bool`

HasInsertDate returns a boolean if a field has been set.

### GetLinks

`func (o *AiraLastRunStatusInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AiraLastRunStatusInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AiraLastRunStatusInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AiraLastRunStatusInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUpdateDate

`func (o *AiraLastRunStatusInfo) GetUpdateDate() string`

GetUpdateDate returns the UpdateDate field if non-nil, zero value otherwise.

### GetUpdateDateOk

`func (o *AiraLastRunStatusInfo) GetUpdateDateOk() (*string, bool)`

GetUpdateDateOk returns a tuple with the UpdateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateDate

`func (o *AiraLastRunStatusInfo) SetUpdateDate(v string)`

SetUpdateDate sets UpdateDate field to given value.

### HasUpdateDate

`func (o *AiraLastRunStatusInfo) HasUpdateDate() bool`

HasUpdateDate returns a boolean if a field has been set.

### GetWarnings

`func (o *AiraLastRunStatusInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AiraLastRunStatusInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AiraLastRunStatusInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AiraLastRunStatusInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


