# AutoGenerateTaskSheetsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskCodes** | Pointer to **[]string** | Task Code for which the task sheets should be generated. | [optional] 
**Attendants** | Pointer to **[]string** | The Attendant who will be assigned to the Task Sheets. Each attendant will be assigned to one task sheet. The number of attendants should be equal to the number of Attendants attached, otheriwise the attendants defined will be used. | [optional] 
**RoomClassList** | Pointer to **[]string** | Room Class of the Room. | [optional] 
**Status** | Pointer to [**TaskSheetGenerationStatusTypesType**](TaskSheetGenerationStatusTypesType.md) |  | [optional] 
**Instructions** | Pointer to [**TaskSheetInstructionsType**](TaskSheetInstructionsType.md) |  | [optional] 
**ExcludeVIPCodes** | Pointer to **[]string** | VIP codes to be excluded. | [optional] 
**TaskDate** | Pointer to **string** | Task Date for which the tasks are to be generated. Date cannot be earlier than business date. | [optional] 
**HotelId** | Pointer to **string** | Property for which the tasks are to be generated. | [optional] 
**NumberOfAttendants** | Pointer to **int32** | The number of attendants for whom the task sheets are to be generated. Number of Attendants or Maximum Credits Per Task Sheet should be defined in order to generate task sheets. | [optional] 
**SheetOrderBy** | Pointer to **string** | The order of the rooms when assigning to the task sheets. Default order is by Room Number. If task sheets are to be ordered by Section or Floor, a new task sheet will be generated for Section/Floor. | [optional] 
**MaximumCreditsPerSheet** | Pointer to **int32** | The maximum credits that can assigned to a task sheet based on the credits defined on the room. | [optional] 
**ReturnTaskSheets** | Pointer to **bool** | Return the details of the task sheets which were generated. Setting this to true will return the TaskAssignment element with details of task sheets which were generated. | [optional] 
**Turndown** | Pointer to **bool** | Return whether the sheet to be generated is of type turndown or not. | [optional] 
**VIPOnly** | Pointer to **bool** | Return whether the sheet to be generated is VIP only or not. | [optional] 
**SeparateNSRRooms** | Pointer to **bool** | Separate No Service rooms if there are any. | [optional] 
**SeparateDNDRooms** | Pointer to **bool** | Separate Do not Disturb rooms if there are any. | [optional] 
**ShowAllScheduledTasks** | Pointer to **bool** | If ShowAllScheduledTasks is true then all housekeeping tasks scheduled for the day for the reservation will be shown, otherwise only the task with the highest priority will be shown. | [optional] 
**SectionTypeToUse** | Pointer to **string** | If the task sheets have to sorted by Section, then the type of section to use should be indicated here. The types are &#39;Day&#39; or &#39;Evening&#39;. | [optional] 
**OverrideTaskTemplate** | Pointer to **bool** | Overrides the existing task template. | [optional] 
**TemplateCode** | Pointer to **string** | Template code of the task sheet. | [optional] 
**TemplateDescription** | Pointer to **string** | Short description of the task sheet. | [optional] 
**RateCode** | Pointer to **string** | Rate codes needed for task sheet break out. | [optional] 
**Room** | Pointer to **string** | Rooms needed for task sheet break out. | [optional] 
**StayOverFirst** | Pointer to **bool** | Stay over first for the task sheet. | [optional] 
**DefaultTemplate** | Pointer to **bool** | Indicates if the template code of the task sheet is set as default. | [optional] 
**ExcludeRoomsExclusiveToOwner** | Pointer to **bool** | It indicates exclude all the rooms that are configured as exclusive to owners. | [optional] 
**ExcludeRoomsOccupiedByOwner** | Pointer to **bool** | It exclude any rooms that are occupied by their owner and/or an unthorized user of the room. | [optional] 
**RuleCodes** | Pointer to **[]string** | The credits configured for the different rules that apply for the current generation of task sheets process, it is available only when Housekeeping Credits is set to Room Task Rule. | [optional] 

## Methods

### NewAutoGenerateTaskSheetsCriteriaType

`func NewAutoGenerateTaskSheetsCriteriaType() *AutoGenerateTaskSheetsCriteriaType`

NewAutoGenerateTaskSheetsCriteriaType instantiates a new AutoGenerateTaskSheetsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoGenerateTaskSheetsCriteriaTypeWithDefaults

`func NewAutoGenerateTaskSheetsCriteriaTypeWithDefaults() *AutoGenerateTaskSheetsCriteriaType`

NewAutoGenerateTaskSheetsCriteriaTypeWithDefaults instantiates a new AutoGenerateTaskSheetsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTaskCodes() []string`

GetTaskCodes returns the TaskCodes field if non-nil, zero value otherwise.

### GetTaskCodesOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTaskCodesOk() (*[]string, bool)`

GetTaskCodesOk returns a tuple with the TaskCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) SetTaskCodes(v []string)`

SetTaskCodes sets TaskCodes field to given value.

### HasTaskCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) HasTaskCodes() bool`

HasTaskCodes returns a boolean if a field has been set.

### GetAttendants

`func (o *AutoGenerateTaskSheetsCriteriaType) GetAttendants() []string`

GetAttendants returns the Attendants field if non-nil, zero value otherwise.

### GetAttendantsOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetAttendantsOk() (*[]string, bool)`

GetAttendantsOk returns a tuple with the Attendants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendants

`func (o *AutoGenerateTaskSheetsCriteriaType) SetAttendants(v []string)`

SetAttendants sets Attendants field to given value.

### HasAttendants

`func (o *AutoGenerateTaskSheetsCriteriaType) HasAttendants() bool`

HasAttendants returns a boolean if a field has been set.

### GetRoomClassList

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRoomClassList() []string`

GetRoomClassList returns the RoomClassList field if non-nil, zero value otherwise.

### GetRoomClassListOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRoomClassListOk() (*[]string, bool)`

GetRoomClassListOk returns a tuple with the RoomClassList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClassList

`func (o *AutoGenerateTaskSheetsCriteriaType) SetRoomClassList(v []string)`

SetRoomClassList sets RoomClassList field to given value.

### HasRoomClassList

`func (o *AutoGenerateTaskSheetsCriteriaType) HasRoomClassList() bool`

HasRoomClassList returns a boolean if a field has been set.

### GetStatus

`func (o *AutoGenerateTaskSheetsCriteriaType) GetStatus() TaskSheetGenerationStatusTypesType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetStatusOk() (*TaskSheetGenerationStatusTypesType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AutoGenerateTaskSheetsCriteriaType) SetStatus(v TaskSheetGenerationStatusTypesType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AutoGenerateTaskSheetsCriteriaType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetInstructions

`func (o *AutoGenerateTaskSheetsCriteriaType) GetInstructions() TaskSheetInstructionsType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetInstructionsOk() (*TaskSheetInstructionsType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *AutoGenerateTaskSheetsCriteriaType) SetInstructions(v TaskSheetInstructionsType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *AutoGenerateTaskSheetsCriteriaType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetExcludeVIPCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) GetExcludeVIPCodes() []string`

GetExcludeVIPCodes returns the ExcludeVIPCodes field if non-nil, zero value otherwise.

### GetExcludeVIPCodesOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetExcludeVIPCodesOk() (*[]string, bool)`

GetExcludeVIPCodesOk returns a tuple with the ExcludeVIPCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeVIPCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) SetExcludeVIPCodes(v []string)`

SetExcludeVIPCodes sets ExcludeVIPCodes field to given value.

### HasExcludeVIPCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) HasExcludeVIPCodes() bool`

HasExcludeVIPCodes returns a boolean if a field has been set.

### GetTaskDate

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTaskDate() string`

GetTaskDate returns the TaskDate field if non-nil, zero value otherwise.

### GetTaskDateOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTaskDateOk() (*string, bool)`

GetTaskDateOk returns a tuple with the TaskDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDate

`func (o *AutoGenerateTaskSheetsCriteriaType) SetTaskDate(v string)`

SetTaskDate sets TaskDate field to given value.

### HasTaskDate

`func (o *AutoGenerateTaskSheetsCriteriaType) HasTaskDate() bool`

HasTaskDate returns a boolean if a field has been set.

### GetHotelId

`func (o *AutoGenerateTaskSheetsCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AutoGenerateTaskSheetsCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AutoGenerateTaskSheetsCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNumberOfAttendants

`func (o *AutoGenerateTaskSheetsCriteriaType) GetNumberOfAttendants() int32`

GetNumberOfAttendants returns the NumberOfAttendants field if non-nil, zero value otherwise.

### GetNumberOfAttendantsOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetNumberOfAttendantsOk() (*int32, bool)`

GetNumberOfAttendantsOk returns a tuple with the NumberOfAttendants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfAttendants

`func (o *AutoGenerateTaskSheetsCriteriaType) SetNumberOfAttendants(v int32)`

SetNumberOfAttendants sets NumberOfAttendants field to given value.

### HasNumberOfAttendants

`func (o *AutoGenerateTaskSheetsCriteriaType) HasNumberOfAttendants() bool`

HasNumberOfAttendants returns a boolean if a field has been set.

### GetSheetOrderBy

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSheetOrderBy() string`

GetSheetOrderBy returns the SheetOrderBy field if non-nil, zero value otherwise.

### GetSheetOrderByOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSheetOrderByOk() (*string, bool)`

GetSheetOrderByOk returns a tuple with the SheetOrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSheetOrderBy

`func (o *AutoGenerateTaskSheetsCriteriaType) SetSheetOrderBy(v string)`

SetSheetOrderBy sets SheetOrderBy field to given value.

### HasSheetOrderBy

`func (o *AutoGenerateTaskSheetsCriteriaType) HasSheetOrderBy() bool`

HasSheetOrderBy returns a boolean if a field has been set.

### GetMaximumCreditsPerSheet

`func (o *AutoGenerateTaskSheetsCriteriaType) GetMaximumCreditsPerSheet() int32`

GetMaximumCreditsPerSheet returns the MaximumCreditsPerSheet field if non-nil, zero value otherwise.

### GetMaximumCreditsPerSheetOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetMaximumCreditsPerSheetOk() (*int32, bool)`

GetMaximumCreditsPerSheetOk returns a tuple with the MaximumCreditsPerSheet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumCreditsPerSheet

`func (o *AutoGenerateTaskSheetsCriteriaType) SetMaximumCreditsPerSheet(v int32)`

SetMaximumCreditsPerSheet sets MaximumCreditsPerSheet field to given value.

### HasMaximumCreditsPerSheet

`func (o *AutoGenerateTaskSheetsCriteriaType) HasMaximumCreditsPerSheet() bool`

HasMaximumCreditsPerSheet returns a boolean if a field has been set.

### GetReturnTaskSheets

`func (o *AutoGenerateTaskSheetsCriteriaType) GetReturnTaskSheets() bool`

GetReturnTaskSheets returns the ReturnTaskSheets field if non-nil, zero value otherwise.

### GetReturnTaskSheetsOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetReturnTaskSheetsOk() (*bool, bool)`

GetReturnTaskSheetsOk returns a tuple with the ReturnTaskSheets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnTaskSheets

`func (o *AutoGenerateTaskSheetsCriteriaType) SetReturnTaskSheets(v bool)`

SetReturnTaskSheets sets ReturnTaskSheets field to given value.

### HasReturnTaskSheets

`func (o *AutoGenerateTaskSheetsCriteriaType) HasReturnTaskSheets() bool`

HasReturnTaskSheets returns a boolean if a field has been set.

### GetTurndown

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTurndown() bool`

GetTurndown returns the Turndown field if non-nil, zero value otherwise.

### GetTurndownOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTurndownOk() (*bool, bool)`

GetTurndownOk returns a tuple with the Turndown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndown

`func (o *AutoGenerateTaskSheetsCriteriaType) SetTurndown(v bool)`

SetTurndown sets Turndown field to given value.

### HasTurndown

`func (o *AutoGenerateTaskSheetsCriteriaType) HasTurndown() bool`

HasTurndown returns a boolean if a field has been set.

### GetVIPOnly

`func (o *AutoGenerateTaskSheetsCriteriaType) GetVIPOnly() bool`

GetVIPOnly returns the VIPOnly field if non-nil, zero value otherwise.

### GetVIPOnlyOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetVIPOnlyOk() (*bool, bool)`

GetVIPOnlyOk returns a tuple with the VIPOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVIPOnly

`func (o *AutoGenerateTaskSheetsCriteriaType) SetVIPOnly(v bool)`

SetVIPOnly sets VIPOnly field to given value.

### HasVIPOnly

`func (o *AutoGenerateTaskSheetsCriteriaType) HasVIPOnly() bool`

HasVIPOnly returns a boolean if a field has been set.

### GetSeparateNSRRooms

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSeparateNSRRooms() bool`

GetSeparateNSRRooms returns the SeparateNSRRooms field if non-nil, zero value otherwise.

### GetSeparateNSRRoomsOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSeparateNSRRoomsOk() (*bool, bool)`

GetSeparateNSRRoomsOk returns a tuple with the SeparateNSRRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeparateNSRRooms

`func (o *AutoGenerateTaskSheetsCriteriaType) SetSeparateNSRRooms(v bool)`

SetSeparateNSRRooms sets SeparateNSRRooms field to given value.

### HasSeparateNSRRooms

`func (o *AutoGenerateTaskSheetsCriteriaType) HasSeparateNSRRooms() bool`

HasSeparateNSRRooms returns a boolean if a field has been set.

### GetSeparateDNDRooms

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSeparateDNDRooms() bool`

GetSeparateDNDRooms returns the SeparateDNDRooms field if non-nil, zero value otherwise.

### GetSeparateDNDRoomsOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSeparateDNDRoomsOk() (*bool, bool)`

GetSeparateDNDRoomsOk returns a tuple with the SeparateDNDRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeparateDNDRooms

`func (o *AutoGenerateTaskSheetsCriteriaType) SetSeparateDNDRooms(v bool)`

SetSeparateDNDRooms sets SeparateDNDRooms field to given value.

### HasSeparateDNDRooms

`func (o *AutoGenerateTaskSheetsCriteriaType) HasSeparateDNDRooms() bool`

HasSeparateDNDRooms returns a boolean if a field has been set.

### GetShowAllScheduledTasks

`func (o *AutoGenerateTaskSheetsCriteriaType) GetShowAllScheduledTasks() bool`

GetShowAllScheduledTasks returns the ShowAllScheduledTasks field if non-nil, zero value otherwise.

### GetShowAllScheduledTasksOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetShowAllScheduledTasksOk() (*bool, bool)`

GetShowAllScheduledTasksOk returns a tuple with the ShowAllScheduledTasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowAllScheduledTasks

`func (o *AutoGenerateTaskSheetsCriteriaType) SetShowAllScheduledTasks(v bool)`

SetShowAllScheduledTasks sets ShowAllScheduledTasks field to given value.

### HasShowAllScheduledTasks

`func (o *AutoGenerateTaskSheetsCriteriaType) HasShowAllScheduledTasks() bool`

HasShowAllScheduledTasks returns a boolean if a field has been set.

### GetSectionTypeToUse

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSectionTypeToUse() string`

GetSectionTypeToUse returns the SectionTypeToUse field if non-nil, zero value otherwise.

### GetSectionTypeToUseOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetSectionTypeToUseOk() (*string, bool)`

GetSectionTypeToUseOk returns a tuple with the SectionTypeToUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSectionTypeToUse

`func (o *AutoGenerateTaskSheetsCriteriaType) SetSectionTypeToUse(v string)`

SetSectionTypeToUse sets SectionTypeToUse field to given value.

### HasSectionTypeToUse

`func (o *AutoGenerateTaskSheetsCriteriaType) HasSectionTypeToUse() bool`

HasSectionTypeToUse returns a boolean if a field has been set.

### GetOverrideTaskTemplate

`func (o *AutoGenerateTaskSheetsCriteriaType) GetOverrideTaskTemplate() bool`

GetOverrideTaskTemplate returns the OverrideTaskTemplate field if non-nil, zero value otherwise.

### GetOverrideTaskTemplateOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetOverrideTaskTemplateOk() (*bool, bool)`

GetOverrideTaskTemplateOk returns a tuple with the OverrideTaskTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideTaskTemplate

`func (o *AutoGenerateTaskSheetsCriteriaType) SetOverrideTaskTemplate(v bool)`

SetOverrideTaskTemplate sets OverrideTaskTemplate field to given value.

### HasOverrideTaskTemplate

`func (o *AutoGenerateTaskSheetsCriteriaType) HasOverrideTaskTemplate() bool`

HasOverrideTaskTemplate returns a boolean if a field has been set.

### GetTemplateCode

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTemplateCode() string`

GetTemplateCode returns the TemplateCode field if non-nil, zero value otherwise.

### GetTemplateCodeOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTemplateCodeOk() (*string, bool)`

GetTemplateCodeOk returns a tuple with the TemplateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCode

`func (o *AutoGenerateTaskSheetsCriteriaType) SetTemplateCode(v string)`

SetTemplateCode sets TemplateCode field to given value.

### HasTemplateCode

`func (o *AutoGenerateTaskSheetsCriteriaType) HasTemplateCode() bool`

HasTemplateCode returns a boolean if a field has been set.

### GetTemplateDescription

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTemplateDescription() string`

GetTemplateDescription returns the TemplateDescription field if non-nil, zero value otherwise.

### GetTemplateDescriptionOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetTemplateDescriptionOk() (*string, bool)`

GetTemplateDescriptionOk returns a tuple with the TemplateDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateDescription

`func (o *AutoGenerateTaskSheetsCriteriaType) SetTemplateDescription(v string)`

SetTemplateDescription sets TemplateDescription field to given value.

### HasTemplateDescription

`func (o *AutoGenerateTaskSheetsCriteriaType) HasTemplateDescription() bool`

HasTemplateDescription returns a boolean if a field has been set.

### GetRateCode

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *AutoGenerateTaskSheetsCriteriaType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *AutoGenerateTaskSheetsCriteriaType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRoom

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *AutoGenerateTaskSheetsCriteriaType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *AutoGenerateTaskSheetsCriteriaType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetStayOverFirst

`func (o *AutoGenerateTaskSheetsCriteriaType) GetStayOverFirst() bool`

GetStayOverFirst returns the StayOverFirst field if non-nil, zero value otherwise.

### GetStayOverFirstOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetStayOverFirstOk() (*bool, bool)`

GetStayOverFirstOk returns a tuple with the StayOverFirst field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayOverFirst

`func (o *AutoGenerateTaskSheetsCriteriaType) SetStayOverFirst(v bool)`

SetStayOverFirst sets StayOverFirst field to given value.

### HasStayOverFirst

`func (o *AutoGenerateTaskSheetsCriteriaType) HasStayOverFirst() bool`

HasStayOverFirst returns a boolean if a field has been set.

### GetDefaultTemplate

`func (o *AutoGenerateTaskSheetsCriteriaType) GetDefaultTemplate() bool`

GetDefaultTemplate returns the DefaultTemplate field if non-nil, zero value otherwise.

### GetDefaultTemplateOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetDefaultTemplateOk() (*bool, bool)`

GetDefaultTemplateOk returns a tuple with the DefaultTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultTemplate

`func (o *AutoGenerateTaskSheetsCriteriaType) SetDefaultTemplate(v bool)`

SetDefaultTemplate sets DefaultTemplate field to given value.

### HasDefaultTemplate

`func (o *AutoGenerateTaskSheetsCriteriaType) HasDefaultTemplate() bool`

HasDefaultTemplate returns a boolean if a field has been set.

### GetExcludeRoomsExclusiveToOwner

`func (o *AutoGenerateTaskSheetsCriteriaType) GetExcludeRoomsExclusiveToOwner() bool`

GetExcludeRoomsExclusiveToOwner returns the ExcludeRoomsExclusiveToOwner field if non-nil, zero value otherwise.

### GetExcludeRoomsExclusiveToOwnerOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetExcludeRoomsExclusiveToOwnerOk() (*bool, bool)`

GetExcludeRoomsExclusiveToOwnerOk returns a tuple with the ExcludeRoomsExclusiveToOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeRoomsExclusiveToOwner

`func (o *AutoGenerateTaskSheetsCriteriaType) SetExcludeRoomsExclusiveToOwner(v bool)`

SetExcludeRoomsExclusiveToOwner sets ExcludeRoomsExclusiveToOwner field to given value.

### HasExcludeRoomsExclusiveToOwner

`func (o *AutoGenerateTaskSheetsCriteriaType) HasExcludeRoomsExclusiveToOwner() bool`

HasExcludeRoomsExclusiveToOwner returns a boolean if a field has been set.

### GetExcludeRoomsOccupiedByOwner

`func (o *AutoGenerateTaskSheetsCriteriaType) GetExcludeRoomsOccupiedByOwner() bool`

GetExcludeRoomsOccupiedByOwner returns the ExcludeRoomsOccupiedByOwner field if non-nil, zero value otherwise.

### GetExcludeRoomsOccupiedByOwnerOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetExcludeRoomsOccupiedByOwnerOk() (*bool, bool)`

GetExcludeRoomsOccupiedByOwnerOk returns a tuple with the ExcludeRoomsOccupiedByOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeRoomsOccupiedByOwner

`func (o *AutoGenerateTaskSheetsCriteriaType) SetExcludeRoomsOccupiedByOwner(v bool)`

SetExcludeRoomsOccupiedByOwner sets ExcludeRoomsOccupiedByOwner field to given value.

### HasExcludeRoomsOccupiedByOwner

`func (o *AutoGenerateTaskSheetsCriteriaType) HasExcludeRoomsOccupiedByOwner() bool`

HasExcludeRoomsOccupiedByOwner returns a boolean if a field has been set.

### GetRuleCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRuleCodes() []string`

GetRuleCodes returns the RuleCodes field if non-nil, zero value otherwise.

### GetRuleCodesOk

`func (o *AutoGenerateTaskSheetsCriteriaType) GetRuleCodesOk() (*[]string, bool)`

GetRuleCodesOk returns a tuple with the RuleCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) SetRuleCodes(v []string)`

SetRuleCodes sets RuleCodes field to given value.

### HasRuleCodes

`func (o *AutoGenerateTaskSheetsCriteriaType) HasRuleCodes() bool`

HasRuleCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


