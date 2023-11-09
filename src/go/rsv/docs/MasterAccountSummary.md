# MasterAccountSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterAccount** | Pointer to [**MasterAccountSummaryType**](MasterAccountSummaryType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewMasterAccountSummary

`func NewMasterAccountSummary() *MasterAccountSummary`

NewMasterAccountSummary instantiates a new MasterAccountSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMasterAccountSummaryWithDefaults

`func NewMasterAccountSummaryWithDefaults() *MasterAccountSummary`

NewMasterAccountSummaryWithDefaults instantiates a new MasterAccountSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MasterAccountSummary) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MasterAccountSummary) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MasterAccountSummary) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MasterAccountSummary) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterAccount

`func (o *MasterAccountSummary) GetMasterAccount() MasterAccountSummaryType`

GetMasterAccount returns the MasterAccount field if non-nil, zero value otherwise.

### GetMasterAccountOk

`func (o *MasterAccountSummary) GetMasterAccountOk() (*MasterAccountSummaryType, bool)`

GetMasterAccountOk returns a tuple with the MasterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterAccount

`func (o *MasterAccountSummary) SetMasterAccount(v MasterAccountSummaryType)`

SetMasterAccount sets MasterAccount field to given value.

### HasMasterAccount

`func (o *MasterAccountSummary) HasMasterAccount() bool`

HasMasterAccount returns a boolean if a field has been set.

### GetWarnings

`func (o *MasterAccountSummary) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MasterAccountSummary) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MasterAccountSummary) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MasterAccountSummary) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


