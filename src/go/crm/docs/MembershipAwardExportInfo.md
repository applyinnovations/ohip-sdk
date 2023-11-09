# MembershipAwardExportInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExportInfo** | Pointer to [**MembershipAwardsExportType**](MembershipAwardsExportType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewMembershipAwardExportInfo

`func NewMembershipAwardExportInfo() *MembershipAwardExportInfo`

NewMembershipAwardExportInfo instantiates a new MembershipAwardExportInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardExportInfoWithDefaults

`func NewMembershipAwardExportInfoWithDefaults() *MembershipAwardExportInfo`

NewMembershipAwardExportInfoWithDefaults instantiates a new MembershipAwardExportInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExportInfo

`func (o *MembershipAwardExportInfo) GetExportInfo() MembershipAwardsExportType`

GetExportInfo returns the ExportInfo field if non-nil, zero value otherwise.

### GetExportInfoOk

`func (o *MembershipAwardExportInfo) GetExportInfoOk() (*MembershipAwardsExportType, bool)`

GetExportInfoOk returns a tuple with the ExportInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportInfo

`func (o *MembershipAwardExportInfo) SetExportInfo(v MembershipAwardsExportType)`

SetExportInfo sets ExportInfo field to given value.

### HasExportInfo

`func (o *MembershipAwardExportInfo) HasExportInfo() bool`

HasExportInfo returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipAwardExportInfo) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipAwardExportInfo) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipAwardExportInfo) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipAwardExportInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipAwardExportInfo) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipAwardExportInfo) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipAwardExportInfo) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipAwardExportInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


