# ExternalProfileSummaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Profile** | Pointer to [**ExternalProfileSummaryType**](ExternalProfileSummaryType.md) |  | [optional] 

## Methods

### NewExternalProfileSummaryInfoType

`func NewExternalProfileSummaryInfoType() *ExternalProfileSummaryInfoType`

NewExternalProfileSummaryInfoType instantiates a new ExternalProfileSummaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalProfileSummaryInfoTypeWithDefaults

`func NewExternalProfileSummaryInfoTypeWithDefaults() *ExternalProfileSummaryInfoType`

NewExternalProfileSummaryInfoTypeWithDefaults instantiates a new ExternalProfileSummaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *ExternalProfileSummaryInfoType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ExternalProfileSummaryInfoType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ExternalProfileSummaryInfoType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ExternalProfileSummaryInfoType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfile

`func (o *ExternalProfileSummaryInfoType) GetProfile() ExternalProfileSummaryType`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *ExternalProfileSummaryInfoType) GetProfileOk() (*ExternalProfileSummaryType, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *ExternalProfileSummaryInfoType) SetProfile(v ExternalProfileSummaryType)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *ExternalProfileSummaryInfoType) HasProfile() bool`

HasProfile returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


